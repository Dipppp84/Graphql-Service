import {gql} from 'apollo-server'

export default gql`
    type Track {
        id: ID!
        title: String!
        album: Album
        artists: [Artist]
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }

    type Tracks {
        items: [Track]!
        limit: Int!
        offset: String!
        total: String!
    }

    input TrackInput {
        title: String!
        albumId: String
        artistsIds: [String]
        bandsIds: [String]
        duration: Int
        released: Int
        genresIds: [String]
    }

    type Query {
        tracks(limit : Int, offset: Int) : Tracks!
        track(id : String!) : Track
    }

    type Mutation{
        createTrack(track: TrackInput!) : Track
        deleteTrack(id : String!) : Delete!
        updateTrack(id : String!, track: TrackInput!) : Track
    }
`