import UserAPI from './modules/users/UserAPI.js';
import GenreAPI from "./modules/genres/GenreAPI.js";
import BandAPI from "./modules/bands/BandAPI.js";
import ArtistAPI from './modules/artists/ArtistAPI.js';

export default {
    userAPI: new UserAPI(),
    genreAPI: new GenreAPI(),
    bandAPI: new BandAPI(),
    artistAPI: new ArtistAPI(),
}