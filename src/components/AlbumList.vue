<script setup lang="ts">
import albums from '../assets/albums.json';
</script>

<template>
    <h2>AlbumList: {{ albums[Number($route.params.artist_id)].AlbumArtist }}</h2>
    <div class="row mt-3">
        <div class="card m-3" style="width: 18rem;" v-for="(Albums, index) in albums[Number($route.params.artist_id)].Albums" @click="() => $router.push(`/artist/${$route.params.artist_id}/album/${index}`)">
            <img class="card-img-top" :src=Albums.items[0].snippet.thumbnails.medium.url alt="Album Cover" />
            <div class="card-body">
                <h5 class="card-title">{{ Albums.AlbumTitle }}</h5>
            </div>
    </div>
    </div>
</template>