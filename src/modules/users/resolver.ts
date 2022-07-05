import {User} from './UserAPI.js';

export default {
    Query: {
        user: async (parent: any, args: { id: string }, context: { dataSources }) => {
            const user = await context.dataSources.userAPI.getUser(args.id);
            user.id = user._id;
            user.secondName = user.lastName;
            return user;
        },
        jwt: async (parent: any, args: { email: string, password: string }, context: { dataSources }) => {
            return context.dataSources.userAPI.getJwt(args.email, args.password);
        },
    },
    Mutation: {
        register: async (parent: any, args: { user: User }, context: any) => {
            const user = await context.dataSources.userAPI.register(args.user);
            user.id = user._id;
            user.secondName = user.lastName;
            return user;
        },
    }
};