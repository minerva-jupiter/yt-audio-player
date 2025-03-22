<template>
    <div class="fixed-bottom">
        <div class="d-flex justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16" @click="() => player.play_pause()">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-bar-right" viewBox="0 0 16 16" @click="() => player.next_song()">
                <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"/>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
    import player from '../player';

</script>