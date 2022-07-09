import {gql} from 'apollo-server'

export default gql`
    type Favourites {
        id: ID!
        userId: ID
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
        tracks: [Track]
    }

    type Query {
        favourites: Favourites!
    }

    type Mutation {
        addTrackToFavourites( id: String!): Favourites
        addBandToFavourites(id: String!): Favourites
        addArtistToFavourites(id: String!): Favourites
        addGenreToFavourites(id: String!): Favourites

        removeTrackToFavourites(id: String!): Favourites
        removeBandToFavourites(id: String!): Favourites
        removeArtistToFavourites(id: String!): Favourites
        removeGenreToFavourites(id: String!): Favourites
    }
`