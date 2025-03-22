import { ref } from 'vue';

export interface Queue {
    video_id: string;
    title: string;
};

let queue: Queue[] = [];
const isPlaying = ref(false);
 
function add_to_queue(list: Queue[]): void {
    console.log("add_to_queue was called");
    for (let i = 0; i < list.length; i++) {
        queue.push(list[i]);
    };
}
 
function remove_queue(): void {
    console.log("remove_queue was called");
    queue = [];
}
 
function next_song(): void {
    console.log("next_song was called");
    queue.shift();
}
 
function toggle_play(): void {
    console.log("play_pause was called");
    isPlaying.value = !isPlaying.value;
}


 
 export default {add_to_queue, remove_queue, next_song, toggle_play, isPlaying};