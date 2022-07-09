import {Artist} from "./ArtistAPI.js";
import {convertArtist} from "./service.js";

export default {
    Query: {
        artists: async (parent: any, args: { limit: number, offset: number }, context: { dataSources }) => {
            const artists = await context.dataSources.artistAPI.getArtists(args.limit || 5, args.offset || 0);
            for (let i = 0; i < artists.items.length; i++)
                await convertArtist(artists.items[i], context.dataSources);
            return artists;
        },
        artist: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const artist = await context.dataSources.artistAPI.getArtist(args.id);
            await convertArtist(artist, context.dataSources);
            return artist;
        },
    },
    Mutation: {
        createArtist: async (parent: any, args: { artist: Artist }, context: { dataSources }) => {
            const artist = await context.dataSources.artistAPI.createArtist(args.artist);
            await convertArtist(artist, context.dataSources);
            return artist;
        },
        deleteArtist: async (parent: any, args: { id: string }, context: { dataSources }) => {
            return context.dataSources.artistAPI.deleteObj(args.id);
        },
        updateArtist: async (parent: any, args: { id: string, artist: Artist }, context: { dataSources }) => {
            const artist = await context.dataSources.artistAPI.updateArtist(args.id, args.artist);
            await convertArtist(artist, context.dataSources);
            return artist;
        },
    }
};