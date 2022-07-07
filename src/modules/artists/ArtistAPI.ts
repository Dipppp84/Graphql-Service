import 'dotenv/config';
import {Items} from "../../common/commonIntf.js";
import MyRESTDataSource from "../../common/MyRESTDataSource.js";

export default class ArtistAPI extends MyRESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
    }

    async getArtists(limit: number, offset: number): Promise<Artists> {
        return this.get<Artists>(`?limit=${limit}&offset=${offset}`);
    }

    async getArtist(id: string): Promise<Artist> {
        return this.get<Artist>(id);
    }

    async createArtist(artist: Artist): Promise<Artist> {
        return this.post<Artist>('', artist);
    }

    async updateArtist(id: string, artist: Artist): Promise<Artist> {
        return this.put<Artist>(id, artist);
    }
}

export interface Artist {
    _id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    birthDate: string;
    birthPlace: string;
    country: string;
    bandsIds: string[]
    instruments: string[];
}

export interface Artists extends Items {
    items: Artist[];
}