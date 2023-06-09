import model from '../../models/rooms.js';

const typeDefs = `#graphql
  type Room {
    _id: ID!
    house_id: String!
    name: String!
    status: String
    type: String
    floor_num: Int
    desc: String
    created_at: String
    updated_at: String
  }

  input CreateRoomInput {
    house_id: String!
    name: String!
    status: String
    type: String
    floor_num: Int
    desc: String
  }

  input UpdateRoomInput {
    house_id: String!
    name: String!
    status: String
    type: String
    floor_num: Int
    desc: String
  }

  extend type Query {
    room(id: ID): Room!
    rooms: [Room!]
  }

  extend type Mutation {
    createRoom(input: CreateRoomInput!): Room
    updateRoom(id: ID!, input: UpdateRoomInput!): Room
    removeRoom(id: ID!): Room
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    // Resolvers for Queries
    Query: {
        room: async (root, { id }, context) => {
            return model.findById(id);
        },
        rooms: async (root, args, context) => {
            return model.find();
        },
    },

    // Resolvers for Mutations
    Mutation: {
        createRoom: async ( root, { input }, context ) => {
            return model.create(input);
        },
        updateRoom: async (root, { id, input }, context) => {
            return model.findByIdAndUpdate(id, input);
        },
        removeRoom: async (root, { id }, context) => {
            return model.findByIdAndRemove(id);
        },
    },
};

export { typeDefs, resolvers }