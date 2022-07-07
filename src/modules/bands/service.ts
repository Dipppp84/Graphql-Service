import {Band} from "./BandAPI";
import {Genre} from "../genres/GenreAPI";
import {getAllGenres} from "../genres/service.js";

export function getAllBands(bandsIds: string[], dataSources): Array<Promise<Band>> {
    const bands = new Array<Promise<Band>>(bandsIds.length)
    for (let j = 0; j < bandsIds.length; j++) {
        const id = bandsIds[j];
        bands[j] = new Promise<Band>(async resolve => {
            const band = await dataSources.bandAPI.getBand(id);
            await convertBand(band, dataSources)
            resolve(band);
        });
    }
    return bands;
}

export async function convertBand(band, dataSources): Promise<void> {
    band.id = band._id;
    const genres = getAllGenres(band.genresIds, dataSources);
    band.genres = await Promise.all<Genre>(genres);
}

export async function setMember(member, dataSources) {

}