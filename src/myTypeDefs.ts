import commonSch from './common/schema.js';
import UserSch from './modules/users/schema.js';
import GenreSch from './modules/genres/schema.js';
import BandSch from './modules/bands/schema.js';
import ArtistSch from './modules/artists/schema.js';
import TrackSch from './modules/tracks/schema.js';
import AlbumSch from './modules/albums/schema.js';
import FavouriteSch from './modules/favourites/schema.js';

export default [
    commonSch,
    UserSch,
    GenreSch,
    BandSch,
    ArtistSch,
    TrackSch,
    AlbumSch,
    FavouriteSch
]