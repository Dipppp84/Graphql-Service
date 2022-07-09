import 'dotenv/config';
import {Items} from "../../common/commonIntf.js";
import MyRESTDataSource from "../../common/MyRESTDataSource.js";

export default class AlbumAPI extends MyRESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }

    async getAlbums(limit: number, offset: number): Promise<Albums> {
        return this.get<Albums>(`?limit=${limit}&offset=${offset}`);
    }

    async getAlbum(id: string): Promise<Album> {
        return this.get<Album>(encodeURIComponent(id));
    }

    async createAlbum(album: Album): Promise<Album> {
        return this.post<Album>('', album);
    }

    async updateAlbum(id: string, album: Album): Promise<Album> {
        return this.put<Album>(encodeURIComponent(id), album);
    }
}

export interface Album {
    _id: string;
    name: string;
    released: number;
    artistsIds: string[];
    bandsIds: string[];
    trackIds: string[];
    genresIds: string[];
    image: string;
}

export interface Albums extends Items {
    items: Album[];
}