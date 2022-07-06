import {RequestOptions, RESTDataSource} from "apollo-datasource-rest";
import 'dotenv/config';
import {Delete, Items} from "../../common/commonIntf.js";

export default class BandAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }

    protected willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', this.context.token);
    }

    async getBands(limit: number, offset: number): Promise<Bands> {
        return this.get<Bands>(`?limit=${limit}&offset=${offset}`);
    }

    async getBand(id: string): Promise<Band> {
        return this.get<Band>(id);
    }


    async createBand(band: Band): Promise<Band> {
        return this.post<Band>('', band);
    }


    async deleteBand(id: string): Promise<Delete> {
        return this.delete<Delete>(id);
    }

    async updateBand(id: string, band: Band): Promise<Band> {
        return this.put<Band>(id, band);
    }
}

export interface Member {
    artist: string;
    instrument: string;
    years: string[];
}

export interface Band {
    _id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
}

export interface Bands extends Items {
    items: Band[];
}