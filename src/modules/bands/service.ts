import {Band, Member} from "./BandAPI.js";
import {Genre} from "../genres/GenreAPI.js";
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

export async function setMember(members : Member[], dataSources): Promise<void> {
    for (let i = 0; i < members.length; i++) {
        const member = members[i];
        if (!member.instrument || !member.artist)
            continue;
        const artist = await dataSources.artistAPI.getArtist(member.artist);
        artist.instruments.push(member.instrument)
        await dataSources.artistAPI.updateArtist(member.artist, {instruments: artist.instruments});
    }
}