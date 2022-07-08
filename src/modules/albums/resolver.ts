import {convertAlbum} from "./service.js";
import {Album} from "./AlbumAPI.js";

export default {
    Query: {
        albums: async (parent: any, args: { limit: number, offset: number }, context: { dataSources }) => {
            const albums = await context.dataSources.albumAPI.getAlbums(args.limit || 5, args.offset || 0);
            for (let i = 0; i < albums.items.length; i++)
                await convertAlbum(albums.items[i], context.dataSources);
            return albums;
        },
        album: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const album = await context.dataSources.albumAPI.getAlbum(args.id);
            await convertAlbum(album, context.dataSources);
            return album;
        },
    },
    Mutation: {
        createAlbum: async (parent: any, args: { album: Album }, context: { dataSources }) => {
            const album = await context.dataSources.albumAPI.createAlbum(args.album);
            await convertAlbum(album, context.dataSources);
            return album;
        },
        deleteAlbum: async (parent: any, args: { id: string }, context: { dataSources }) => {
            return context.dataSources.albumAPI.deleteObj(args.id);
        },
        updateAlbum: async (parent: any, args: { id: string, album: Album }, context: { dataSources }) => {
            const album = await context.dataSources.albumAPI.updateAlbum(args.id, args.album);
            await convertAlbum(album, context.dataSources);
            return album;
        },
    }
};