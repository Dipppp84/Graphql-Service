import {convertFavourite} from "./service.js";

export default {
    Query: {
        favourites: async (parent: any, args: any, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.getFavourites();
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        }
    },
    Mutation: {
        addTrackToFavourites: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.addTypeToFavourites({
                type: 'tracks',
                id: args.id
            });
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        },
        addBandToFavourites: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.addTypeToFavourites({type: 'bands', id: args.id});
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        },
        addArtistToFavourites: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.addTypeToFavourites({
                type: 'artists',
                id: args.id
            });
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        },
        addGenreToFavourites: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.addTypeToFavourites({
                type: 'genres',
                id: args.id
            });
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        },
        /**
         * Remove
         */
        removeTrackToFavourites: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.addTypeToFavourites({
                type: 'tracks',
                id: args.id
            });
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        },
        removeBandToFavourites: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.addTypeToFavourites({type: 'bands', id: args.id});
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        },
        removeArtistToFavourites: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.addTypeToFavourites({
                type: 'artists',
                id: args.id
            });
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        },
        removeGenreToFavourites: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const favourites = await context.dataSources.favouriteAPI.addTypeToFavourites({
                type: 'genres',
                id: args.id
            });
            await convertFavourite(favourites, context.dataSources)
            return favourites;
        }
    }
};