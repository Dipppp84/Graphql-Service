import {getAllArtists} from "../artists/service.js";
import {Artist} from "../artists/ArtistAPI.js";
import {getAllBands} from "../bands/service.js";
import {Band} from "../bands/BandAPI.js";
import {getAllTracks} from "../tracks/service.js";
import {Track} from "../tracks/TrackAPI.js";
import {getAllGenres} from "../genres/service.js";
import {Genre} from "../genres/GenreAPI.js";

export async function convertFavourite(favourite, dataSources): Promise<void> {
    favourite.id = favourite._id;
    if (favourite.bandsIds) {
        const bands = getAllBands(favourite.bandsIds, dataSources);
        favourite.bands = await Promise.all<Band>(bands);
    }
    if (favourite.genresIds) {
        const genres = getAllGenres(favourite.genresIds, dataSources);
        favourite.genres = await Promise.all<Genre>(genres);
    }
    if (favourite.artistsIds) {
        const artists = getAllArtists(favourite.artistsIds, dataSources);
        favourite.artists = await Promise.all<Artist>(artists);
    }
    if (favourite.trackIds) {
        const tracks = getAllTracks(favourite.trackIds, dataSources);
        favourite.tracks = await Promise.all<Track>(tracks);
    }
}