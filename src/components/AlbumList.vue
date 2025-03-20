<script setup lang="ts">
import albums from '../assets/albums.json';
albums[0].Albums[0].items[0].snippet.thumbnails.default.url
</script>

<template>
    <h1>AlbumList</h1>
    <div class="card" style="width: 18rem;" v-for="(Albums, index) in albums[$route.params.artist_id].Albums">
        <img class="card-img-top" :src=Albums.items[0].snippet.thumbnails.medium.url alt="Album Cover" />
        <div class="card-body">
            <h5 class="card-title">{{ Albums.AlbumTitle }}</h5>
        </div>
    </div>
</template>