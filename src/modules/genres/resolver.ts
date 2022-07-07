import {Genre} from "./GenreAPI.js";

export default {
    Query: {
        genres: async (parent: any, args: { limit: number, offset: number }, context: { dataSources }) => {
            const genres = await context.dataSources.genreAPI.getGenres(args.limit || 5, args.offset || 0);
            genres.items.forEach(genre => {
                genre.id = genre._id;
            })
            return genres;
        },
        genre: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const genre = await context.dataSources.genreAPI.getGenre(args.id);
            genre.id = genre._id;
            return genre;
        },
    },
    Mutation: {
        createGenre: async (parent: any, args: { genre: Genre }, context: { dataSources }) => {
            const genre = await context.dataSources.genreAPI.createGenre(args.genre);
            genre.id = genre._id;
            return genre;
        },
        deleteGenre: async (parent: any, args: { id: string }, context: { dataSources }) => {
            return context.dataSources.genreAPI.deleteObj(args.id);
        },
        updateGenre: async (parent: any, args: { id: string, genre: Genre }, context: { dataSources }) => {
            const genre = await context.dataSources.genreAPI.updateGenre(args.id, args.genre);
            genre.id = genre._id;
            return genre;
        },
    }
};