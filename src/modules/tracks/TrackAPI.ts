import {RESTDataSource} from "apollo-datasource-rest";
import 'dotenv/config';
import {Items} from "../../common/commonIntf.js";
import MyRESTDataSource from "../../common/MyRESTDataSource.js";

export default class TrackAPI extends MyRESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }

    async getTracks(limit: number, offset: number): Promise<Tracks> {
        return this.get<Tracks>(`?limit=${limit}&offset=${offset}`);
    }

    async getTrack(id: string): Promise<Track> {
        return this.get<Track>(encodeURIComponent(id));
    }

    async createTrack(track: Track): Promise<Track> {
        return this.post<Track>('', track);
    }

    async updateTrack(id: string, track: Track): Promise<Track> {
        return this.put<Track>(encodeURIComponent(id), track);
    }
}

export interface Track {
    _id: string;
    title: string;
    albumId: string;
    artistsIds: string[];
    bandsIds: string[];
    duration: number;
    released: number;
    genresIds: string[];
}

export interface Tracks extends Items {
    items: Track[];
}