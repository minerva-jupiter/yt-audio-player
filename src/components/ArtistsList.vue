<script setup lang="ts">
import albums from '../assets/albums.json';
</script>

<template>
    <h1>ArtistList</h1>
    <div class="card m-3" style="width: 18rem;" v-for="(artists, index) in albums" @click="() => $router.push(`/artist/${index}`)">
        <div class="card-body">
            <h5 class="card-title">{{ artists.AlbumArtist }}</h5>
        </div>
    </div>
</template>