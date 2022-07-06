import {RequestOptions, RESTDataSource} from "apollo-datasource-rest";
import 'dotenv/config';
import {Items, Delete} from '../../common/commonIntf.js'

export default class GenreAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
    }

    protected willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    async getGenres(limit: number, offset: number): Promise<Genres> {
        return this.get<Genres>(`?limit=${limit}&offset=${offset}`);
    }

    async getGenre(id: string): Promise<Genre> {
        return this.get<Genre>(encodeURIComponent(id));
    }

    async createGenre(genre: Genre): Promise<Genre> {
        return this.post<Genre>('', genre);
    }

    async deleteGenre(id: string): Promise<Delete> {
        return this.delete<Delete>(encodeURIComponent(id));
    }

    async updateGenre(id: string, genre: Genre): Promise<Genre> {
        return this.put<Genre>(encodeURIComponent(id), genre);
    }
}

export interface Genre {
    _id: string;
    name: string;
    description: string;
    country: string;
    year: string;
}

export interface Genres extends Items {
    items: Genre[];
}
