import axios from 'axios';
import vm from 'vm';

let videoId = 'aqz-KE-bpKQ';

/**
 * From the Youtube API, retrieve metadata about the video (title, video format and audio format)
 */
async function retrieveMetadata(videoId) {
    const response = await axios.post('https://www.youtube.com/youtubei/v1/player', {
        "videoId": videoId,
        "context": {
            "client": { "clientName": "WEB", "clientVersion": "2.20230810.05.00" }
        }
    });

    const formats = response.data.streamingData.adaptiveFormats;

    return [
        response.data.videoDetails.title,
        formats.filter(w => w.mimeType.startsWith("video/webm"))[0], 
        formats.filter(w => w.mimeType.startsWith("audio/webm"))[0],
    ];
}

/**
 * From the Youtube Web Page, retrieve the challenge algorithm for the n query parameter
 */
async function retrieveChallenge(video_id){

    /**
     * Find the URL of the javascript file for the current player version
     */
    async function retrieve_player_url(video_id) {
        let response = await axios.get('https://www.youtube.com/embed/' + video_id);
        let player_hash = /\/s\/player\/(\w+)\/player_ias.vflset\/\w+\/base.js/.exec(response.data)[1]
        return `https://www.youtube.com/s/player/${player_hash}/player_ias.vflset/en_US/base.js`
    }

    const player_url = await retrieve_player_url(video_id);

    const response = await axios.get(player_url);
    let challenge_name = /\.get\("n"\)\)&&\(b=([a-zA-Z0-9$]+)(?:\[(\d+)\])?\([a-zA-Z0-9]\)/.exec(response.data)[1];
    challenge_name = new RegExp(`var ${challenge_name}\\s*=\\s*\\[(.+?)\\]\\s*[,;]`).exec(response.data)[1];

    const challenge = new RegExp(`${challenge_name}\\s*=\\s*function\\s*\\(([\\w$]+)\\)\\s*{(.+?}\\s*return\\ [\\w$]+.join\\(""\\))};`, "s").exec(response.data)[2];

    return challenge;
}

/**
 * Solve the challenge and replace the n query parameter from the url
 */
function solveChallenge(challenge, formatUrl) {
    const url = new URL(formatUrl);

    const n = url.searchParams.get("n");
    const n_transformed = vm.runInNewContext(`((a) => {${challenge}})('${n}')`);

    url.searchParams.set("n", n_transformed);
    return url.toString();
}


console.log()
console.log("Retrieving metadata")
const [title, video, audio] = await retrieveMetadata(videoId);
const challenge = await retrieveChallenge(videoId);

console.log()
console.log("Solving challenge")
video.url = solveChallenge(challenge, video.url);
audio.url = solveChallenge(challenge, audio.url);

export async function get_url(video_id){
    const [title, video, audio] = await retrieveMetadata(video_id);
    audio.url = solveChallenge(challenge, audio.url);
    return(audio.url);
}