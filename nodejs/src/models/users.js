import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: false,
    required: true
  },
  authority: {
    type: String,
    unique: false,
    required: false
  },
  remember_token: {
    type: String,
    unique: false,
    required: false
  },
  address: [{
    type: String,
    unique: false,
    required: false
  }],
  tel: {
    type: String,
    unique: false,
    required: false
  },
  status: {
    type: String,
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
  },
});

export default mongoose.model("Users", usersSchema);