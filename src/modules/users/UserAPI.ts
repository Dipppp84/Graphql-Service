import {RESTDataSource} from "apollo-datasource-rest";
import 'dotenv/config';

export default class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
    }

    async getUser(id: string): Promise<User> {
        return this.get<User>(encodeURIComponent(id));
    }

    async getJwt(email: string, password: string): Promise<{ jwt: string }> {
        return this.post<{ jwt: string }>(encodeURIComponent('login'), {
            'email': email,
            'password': password
        });
    }

    async register(user: User): Promise<User> {
        return this.post<User>(encodeURIComponent('register'), user);
    }
}

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}
