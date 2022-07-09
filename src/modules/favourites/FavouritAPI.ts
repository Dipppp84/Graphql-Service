import 'dotenv/config';
import MyRESTDataSource from "../../common/MyRESTDataSource.js";

export default class FavouritAPI extends MyRESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
    }

    async getFavourites(): Promise<Favorite> {
        return this.get<Favorite>('');
    }

    async addTypeToFavourites(data: { type: string, id: string }): Promise<Favorite> {
        return this.put<Favorite>('add', data);
    }

    async removeToFavourites(data: { type: string, id: string }): Promise<Favorite> {
        return this.put<Favorite>('remove', data);
    }
}

export interface Favorite {
    _id: string;
    userId: string;
    bandsIds: string[];
    genresIds: string[];
    artistsIds: string[];
    tracksIds: string[];
}