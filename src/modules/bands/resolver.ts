import {Band} from "./BandAPI.js";
import {convertBand} from "./service.js";

export default {
    Query: {
        bands: async (parent: any, args: { limit: number, offset: number }, context: { dataSources }) => {
            const bands = await context.dataSources.bandAPI.getBands(args.limit || 5, args.offset || 0);
            for (let i = 0; i < bands.items.length; i++)
                await convertBand(bands.items[i], context.dataSources);
            return bands;
        },
        band: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const band = await context.dataSources.bandAPI.getBand(args.id);
            await convertBand(band, context.dataSources);
            return band;
        },
    },
    Mutation: {
        createBand: async (parent: any, args: { band: Band }, context: { dataSources }) => {
            const band = await context.dataSources.bandAPI.createBand(args.band);
            await convertBand(band, context.dataSources);
            return band;
        },
        deleteBand: async (parent: any, args: { id: string }, context: { dataSources }) => {
            return context.dataSources.bandAPI.deleteBand(args.id);
        },
        updateBand: async (parent: any, args: { id: string, band: Band }, context: { dataSources }) => {
            const band = await context.dataSources.bandAPI.updateBand(args.id, args.band);
            await convertBand(band, context.dataSources);
            return band;
        },
    }
};