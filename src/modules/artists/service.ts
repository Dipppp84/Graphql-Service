import {Band} from "../bands/BandAPI.js";
import {getAllBands} from "../bands/service.js";

export async function convertArtist(artist, dataSources): Promise<void> {
    artist.id = artist._id;
    const bands = getAllBands(artist.bandsIds, dataSources);
    artist.bands = await Promise.all<Band>(bands);
}