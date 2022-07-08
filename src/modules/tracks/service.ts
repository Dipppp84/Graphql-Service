import {Track} from "./TrackAPI.js";
import {Artist} from "../artists/ArtistAPI.js";
import {getAllBands} from "../bands/service.js";
import {Band} from "../bands/BandAPI.js";
import {Genre} from "../genres/GenreAPI.js";
import {getAllGenres} from "../genres/service.js";
import {getAllArtists} from "../artists/service.js";

export function getAllTracks(trackIds: string[], dataSources): Array<Promise<Track>> {
    const tracks = new Array<Promise<Track>>(trackIds.length)
    for (let j = 0; j < trackIds.length; j++) {
        const id = trackIds[j];
        tracks[j] = new Promise<Track>(async resolve => {
            const track = await dataSources.getTrack(id);
            await convertTrack(track, dataSources)
            resolve(track);
        });
    }
    return tracks;
}

export async function convertTrack(track, dataSources): Promise<void> {
    track.id = track._id;
    const album = getAllAlbums(track.albumId, dataSources)[0];
    track.album = await Promise.all<Album>(album);

    const artists = getAllArtists(track.artistsIds, dataSources);
    track.artists = await Promise.all<Artist>(artists);

    const bands = getAllBands(track.bandsIds, dataSources);
    track.bands = await Promise.all<Band>(bands);

    const genres = getAllGenres(track.genresIds, dataSources);
    track.genres = await Promise.all<Genre>(genres);

}