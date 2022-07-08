import {Album} from "./AlbumAPI.js";
import {getAllArtists} from "../artists/service.js";
import {Artist} from "../artists/ArtistAPI.js";
import {getAllBands} from "../bands/service.js";
import {Band} from "../bands/BandAPI.js";
import {getAllTracks} from "../tracks/service.js";
import {Track} from "../tracks/TrackAPI.js";
import {getAllGenres} from "../genres/service.js";
import {Genre} from "../genres/GenreAPI.js";

export function getAllAlbums(albumIds: string[], dataSources): Array<Promise<Album>> {
    const albums = new Array<Promise<Album>>(albumIds.length)
    for (let j = 0; j < albumIds.length; j++) {
        const id = albumIds[j];
        albums[j] = new Promise<Album>(async resolve => {
            const album = await dataSources.getAlbum(id);
            await convertAlbum(album, dataSources)
            resolve(album);
        });
    }
    return albums;
}

export async function convertAlbum(album, dataSources): Promise<void> {
    album.id = album._id;

    const artists = getAllArtists(album.artistsIds, dataSources);
    album.artists = await Promise.all<Artist>(artists);

    const bands = getAllBands(album.bandsIds, dataSources);
    album.bands = await Promise.all<Band>(bands);

    const tracks = getAllTracks(album.trackIds, dataSources);
    album.tracks = await Promise.all<Track>(tracks);

    const genres = getAllGenres(album.genresIds, dataSources);
    album.genres = await Promise.all<Genre>(genres);
}