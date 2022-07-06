import {gql} from 'apollo-server'

export default gql`
    type Band {
        id: ID!
        name: String
        origin: String
        members: [Member]
        website: String
        genres: [Genre]
    }

    input BandInput{
        name: String
        origin: String
        members: [MemberInput]
        website: String
        genresIds: [String]
    }

    type Bands {
        items: [Band]!
        limit: Int!
        offset: String!
        total: String!
    }

    type Member {
        artist: String
        instrument: String
        years: [String]
    }

    input MemberInput {
        artist: String
        instrument: String
        years: [String]
    }

    type Query {
        bands(limit: Int, offset: Int): Bands!
        band(id: String!): Band
    }

    type Mutation {
        createBand(band: BandInput!): Band
        deleteBand(id: String!): Delete!
        updateBand(id: String!, band: BandInput!): Band
    }
`