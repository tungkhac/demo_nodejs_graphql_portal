import model from '../../models/houses.js';

const typeDefs = `#graphql
  type House {
    _id: ID!
    user_id: String
    name: String!
    address: [String]
    city: String
    status: String
    type: String
    room_num: Int
    desc: String
    created_at: String
    updated_at: String
  }

  input CreateHouseInput {
    user_id: String
    name: String!
    address: [String]
    city: String
    status: String
    type: String
    room_num: Int
    desc: String
  }

  input UpdateHouseInput {
    user_id: String
    name: String!
    address: [String]
    city: String
    status: String
    type: String
    room_num: Int
    desc: String
  }

  extend type Query {
    house(id: ID): House!
    houses: [House!]
  }

  extend type Mutation {
    createHouse(input: CreateHouseInput!): House
    updateHouse(id: ID!, input: UpdateHouseInput!): House
    removeHouse(id: ID!): House
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    // Resolvers for Queries
    Query: {
        house: async (root, { id }, context) => {
            return model.findById(id);
        },
        houses: async (root, args, context) => {
            return model.find();
        },
    },

    // Resolvers for Mutations
    Mutation: {
        createHouse: async ( root, { input }, context ) => {
            return model.create(input);
        },
        updateHouse: async (root, { id, input }, context) => {
            return model.findByIdAndUpdate(id, input);
        },
        removeHouse: async (root, { id }, context) => {
            return model.findByIdAndRemove(id);
        },
    },
};

export { typeDefs, resolvers }