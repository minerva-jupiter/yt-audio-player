<script setup lang="ts">
import albums from '../assets/albums.json';
import player from '../player';
 import type { Queue } from '../player';
 import { useRoute } from 'vue-router';
 const route = useRoute();
 
 const play_song = (index: number) => {
     let songs: Queue[] = [];
     for (let i = 0; i < albums[Number(route.params.artist_id)].Albums[Number(route.params.album_id)].items.length; i++) {
         if (i >= index) {
             const song: Queue = {title: albums[Number(route.params.artist_id)].Albums[Number(route.params.album_id)].items[i].snippet.title, video_id: albums[Number(route.params.artist_id)].Albums[Number(route.params.album_id)].items[i].snippet.resourceId.videoId};
             songs.push(song);
         }
     }
     player.add_to_queue(songs);
 }
</script>

<template>
    <h2>{{ albums[Number($route.params.artist_id)].Albums[Number($route.params.album_id)].AlbumTitle }}</h2>
    <div>
        <ul class="list-group">
            <li v-for="(song, index) in albums[Number($route.params.artist_id)].Albums[Number($route.params.album_id)].items" class="list-group-item" @click="() => play_song(index)">
                {{ song.snippet.title }}
            </li>
        </ul>
    </div>
</template>