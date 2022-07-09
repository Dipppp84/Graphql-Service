import UserAPI from './modules/users/UserAPI.js';
import GenreAPI from "./modules/genres/GenreAPI.js";
import BandAPI from "./modules/bands/BandAPI.js";
import ArtistAPI from './modules/artists/ArtistAPI.js';
import TrackAPI from "./modules/tracks/TrackAPI.js";
import AlbumAPI from "./modules/albums/AlbumAPI.js";
import FavouriteAPI from "./modules/favourites/FavouritAPI.js";


export default {
    userAPI: new UserAPI(),
    genreAPI: new GenreAPI(),
    bandAPI: new BandAPI(),
    artistAPI: new ArtistAPI(),
    trackAPI: new TrackAPI(),
    albumAPI: new AlbumAPI(),
    favouriteAPI: new FavouriteAPI()
}