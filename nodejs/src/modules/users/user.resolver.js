import model from '../../models/users.js';

const typeDefs = `#graphql
  type User {
    _id: ID!
    name: String
    email: String!
    authority: String
    address: [String]
    tel: String
    status: String
    desc: String
    created_at: String
    updated_at: String
  }

  input CreateUserInput {
    name: String
    email: String!
    password: String!
    authority: String
    remember_token: String
    address: [String]
    tel: String
    status: String
    desc: String
  }

  input UpdateUserInput {
    name: String
    password: String
    authority: String
    remember_token: String
    address: [String]
    tel: String
    status: String
    desc: String
  }

  extend type Query {
    user(id: ID): User!
    users: [User!]
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    removeUser(id: ID!): User
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    // Resolvers for Queries
    Query: {
        user: async (root, { id }, context) => {
            return model.find(id);
        },
        users: async (root, args, context) => {
            return model.find();
        },
    },

    // Resolvers for Mutations
    Mutation: {
        createUser: async ( root, { input }, context ) => {
            return model.create(input);
        },
        updateUser: async (root, { id, input }, context) => {
            return model.findByIdAndUpdate(id, input);
        },
        removeUser: async (root, { id }, context) => {
            return model.findByIdAndRemove(id);
        },
    },
};

export { typeDefs, resolvers }