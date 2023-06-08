import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },
  code: {
    type: String,
    unique: true,
    required: true
  },
});

export default mongoose.model("Roles", rolesSchema);