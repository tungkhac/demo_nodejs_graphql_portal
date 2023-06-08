import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const roomsSchema = new Schema({
  house_id: {
    type: String,
    unique: false,
    required: true
  },
  name: {
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
  floor_num: {
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
  }
});

export default mongoose.model("Rooms", roomsSchema);
