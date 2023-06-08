import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const housesSchema = new Schema({
  user_id: {
    type: String,
    unique: false,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: false
  },
  address: [{
    type: String,
    unique: false,
    required: false
  }],
  city: {
    type: String,
    unique: false,
    required: false
  },
  status: {
    type: String,
    unique: false,
    required: false
  },
  type: {
    type: String,
    unique: false,
    required: false
  },
  room_num: {
    type: Number,
    unique: false,
    required: false
  },
  desc: {
    type: String,
    unique: false,
    required: false
  },
  created_at: {
    type: String,
    unique: false,
    required: false
  },
  updated_at: {
    type: String,
    unique: false,
    required: false
  }
});

export default mongoose.model("Houses", housesSchema);