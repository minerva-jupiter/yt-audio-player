<script setup lang="ts">
import albums from '../assets/albums.json';
</script>

<template>
    <h1>{{ albums[$route.params.artist_id].Albums[$route.params.album_id].AlbumTitle }}</h1>
</template>