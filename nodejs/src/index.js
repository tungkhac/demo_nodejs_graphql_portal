import { ApolloServer  } from '@apollo/server'
import { GraphQLScalarType } from 'graphql'
import { typeDefs as userTypeDefs, resolvers as userResolvers } from './modules/users/user.resolver.js'
import { typeDefs as houseTypeDefs, resolvers as houseResolvers } from './modules/houses/house.resolver.js'
import { typeDefs as roomTypeDefs, resolvers as roomResolvers } from './modules/rooms/room.resolver.js'


const typeDefs = `#graphql
  scalar Time

  type Query {
    getVersion: String!
  }

  type Mutation {
    version: String!
  }
`;

const timeScalar = new GraphQLScalarType({
    name: 'Time',
    description: 'Time custom scalar type',
    serialize: (value) => value,
});

const resolvers = {
    Time: timeScalar,
    Query: {
        getVersion: () => `v${process.env.VERSION}`,
    },
};

const schema = new ApolloServer({
    typeDefs: [typeDefs, userTypeDefs, houseTypeDefs, roomTypeDefs],
    resolvers: [resolvers, userResolvers, houseResolvers, roomResolvers],
    // dataSources
});

export {schema}