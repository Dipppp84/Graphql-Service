import {gql} from 'apollo-server'

export default gql`
    type Artist {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: [String]
    }

    type Artists {
        items: [Artist]!
        limit: Int!
        offset: String!
        total: String!
    }

    input ArtistInput {
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [String]
        instruments: [String]
    }

    type Query {
        artists(limit: Int, offset: Int): Artists!
        artist(id: String!): Artist
    }

    type Mutation {
        createArtist(artist: ArtistInput!): Artist
        deleteArtist(id: String!): Delete!
        updateArtist(id: String!, artist: ArtistInput!): Artist
    }
`