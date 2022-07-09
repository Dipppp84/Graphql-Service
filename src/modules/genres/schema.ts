import {gql} from 'apollo-server'

export default gql`
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }

    type Genres {
        items: [Genre]!
        limit: Int!
        offset: String!
        total: String!
    }

    input GenreInput {
        name: String
        description: String
        country: String
        year: Int
    }

    type Query {
        genres(limit : Int, offset: Int) : Genres!
        genre(id : String!) : Genre
    }

    type Mutation{
        createGenre(genre: GenreInput!) : Genre
        deleteGenre(id : String!) : Delete!
        updateGenre(id : String!, genre: GenreInput!) : Genre
    }
`