import { createRouter, createWebHashHistory } from "vue-router";
import About from "./components/About.vue";
import ArtistList from "./components/HelloWorld.vue";

const routes = [
    { path: '/', name: "Home", component: ArtistList },
    { path: '/about', name: "About", component: About },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});