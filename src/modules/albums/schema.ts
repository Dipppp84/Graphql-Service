import {gql} from 'apollo-server'

export default gql`
    type Album {
        id: ID!
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }

    type Albums {
        items: [Album]!
        limit: Int!
        offset: String!
        total: String!
    }

    input AlbumInput {
        name: String
        released: Int
        artistsIds: [String]
        bandsIds: [String]
        trackIds: [String]
        genresIds: [String]
    }

    type Query {
        albums(limit : Int, offset: Int) : Album!
        album(id : String!) : Album
    }

    type Mutation{
        createAlbum(album: AlbumInput!) : Album
        deleteAlbum(id : String!) : Delete!
        updateAlbum(id : String!, album: AlbumInput!) : Album
    }
`