import 'dotenv/config';
import {Delete, Items} from "../../common/commonIntf.js";
import MyRESTDataSource from "../../common/MyRESTDataSource.js";

export default class BandAPI extends MyRESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
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