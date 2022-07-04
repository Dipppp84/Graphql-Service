import {gql} from 'apollo-server'

export default gql`
    type User {
        id: ID!
        firstName: String
        secondName: String
        password: String
        email: String!
    }
    input UserInput{
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }
    type JWT {
        jwt: String!
    }

    type Query {
        user(id : String!) : User
        jwt(email : String!, password : String!) : JWT
    }

    type Mutation{
        register(user: UserInput!) : User
    }
`