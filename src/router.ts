import { createRouter, createWebHashHistory } from "vue-router";
import About from "./components/About.vue";
import AlbumList from "./components/AlbumList.vue";
import ArtistsList from "./components/ArtistsList.vue";
import SongList from "./components/SongList.vue";
const routes = [
    { path: '/', name: "Home", component: ArtistsList },
    { path: '/about', name: "About", component: About },
    { path: '/artist/:artist_id', component: AlbumList},
    { path: '/artist/:artist_id/album/:album_id', component: SongList}
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});
