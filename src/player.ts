import { ref } from 'vue';
import get_url from './youtube.js'
declare function get_url(video_id: string): string;

export interface Queue {
    video_id: string;
    title: string;
};

let queue: Queue[] = [];
const isPlaying = ref(false);

function add_to_queue(list: Queue[]): void {
    console.log("add_to_queue was called");
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        queue.push(list[i]);
    };
    console.log(queue);
}

function remove_queue(): void {
    console.log("remove_queue was called");
    queue = [];
}

function next_song(): void {
    console.log("next_song was called");
    queue.shift();
    console.log(queue);
}

function play_pause(): void {
    console.log("play_pause was called");
    isPlaying.value = !isPlaying.value;
}

export default {add_to_queue, remove_queue, next_song, play_pause, isPlaying};