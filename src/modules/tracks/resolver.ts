import {convertTrack} from "./service.js";
import {Track} from "./TrackAPI.js";

export default {
    Query: {
        tracks: async (parent: any, args: { limit: number, offset: number }, context: { dataSources }) => {
            const tracks = await context.dataSources.trackAPI.getTracks(args.limit || 5, args.offset || 0);
            for (let i = 0; i < tracks.items.length; i++)
                await convertTrack(tracks.items[i], context.dataSources);
            return tracks;
        },
        track: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const track = await context.dataSources.trackAPI.getTrack(args.id);
            await convertTrack(track, context.dataSources);
            return track;
        },
    },
    Mutation: {
        createTrack: async (parent: any, args: { track: Track }, context: { dataSources }) => {
            const track = await context.dataSources.trackAPI.createTrack(args.track);
            await convertTrack(track, context.dataSources);
            return track;
        },
        deleteTrack: async (parent: any, args: { id: string }, context: { dataSources }) => {
            return context.dataSources.trackAPI.deleteObj(args.id);
        },
        updateTrack: async (parent: any, args: { id: string, track: Track }, context: { dataSources }) => {
            const track = await context.dataSources.trackAPI.updateTrack(args.id, args.track);
            await convertTrack(track, context.dataSources);
            return track;
        },
    }
};