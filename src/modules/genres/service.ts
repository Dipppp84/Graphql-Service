import {Genre} from "./GenreAPI.js";

export function getAllGenres(genresIds: string[], dataSources): Array<Promise<Genre>> {
    const genres = new Array<Promise<Genre>>(genresIds.length)
    for (let j = 0; j < genresIds.length; j++) {
        const id = genresIds[j];
        genres[j] = new Promise<Genre>(async resolve => {
            const genre = await dataSources.genreAPI.getGenre(id);
            genre.id = genre._id;
            resolve(genre);
        });
    }
    return genres;
}