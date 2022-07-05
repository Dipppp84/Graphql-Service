import UserAPI from './modules/Users/UserAPI.js';
import GenreAPI from "./modules/genres/GenreAPI.js";

export default {
    userAPI: new UserAPI(),
    genreAPI : new GenreAPI()
}