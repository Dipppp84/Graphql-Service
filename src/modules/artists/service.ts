import {Band} from "../bands/BandAPI.js";
import {getAllBands} from "../bands/service.js";
import {convertTrack} from "../tracks/service.js";
import {Artist} from "./ArtistAPI";

export function getAllArtists(artistsIds: string[], dataSources): Array<Promise<Artist>> {
    const artists = new Array<Promise<Artist>>(artistsIds.length)
    for (let j = 0; j < artistsIds.length; j++) {
        const id = artistsIds[j];
        artists[j] = new Promise<Artist>(async resolve => {
            const artist = await dataSources.getArtist(id);
            await convertTrack(artist, dataSources)
            resolve(artist);
        });
    }
    return artists;
}


export async function convertArtist(artist, dataSources): Promise<void> {
    artist.id = artist._id;
    const bands = getAllBands(artist.bandsIds, dataSources);
    artist.bands = await Promise.all<Band>(bands);
}