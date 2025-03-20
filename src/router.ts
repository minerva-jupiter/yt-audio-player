import { createRouter, createWebHashHistory } from "vue-router";
import About from "./components/About.vue";
import HelloWorld from "./components/HelloWorld.vue";
import AlbumList from "./components/AlbumList.vue";
import ArtistsList from "./components/ArtistsList.vue";
const routes = [
    { path: '/', name: "Home", component: HelloWorld },
    { path: '/about', name: "About", component: About },
    { path: '/artists', component: ArtistsList},
    { path: '/albums/:artist_id', component: AlbumList}
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});
