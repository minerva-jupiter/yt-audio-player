<script setup lang="ts">
import albums from '../assets/albums.json';
albums[0].Albums[0].items[0].snippet.title
</script>

<template>
    <h2>{{ albums[$route.params.artist_id].Albums[$route.params.album_id].AlbumTitle }}</h2>
    <div>
        <ul class="list-group">
            <li v-for="(song, index) in albums[$route.params.artist_id].Albums[$route.params.album_id].items" class="list-group-item">
                {{ song.snippet.title }}
            </li>
        </ul>
    </div>
</template>