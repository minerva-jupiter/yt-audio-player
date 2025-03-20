<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand">yt-audio-player</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView/>   
  </div>
</template>

