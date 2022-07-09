import {gql} from 'apollo-server'

export default gql`
    type Delete{
        acknowledged: Boolean
        deletedCount: Int
    }
`