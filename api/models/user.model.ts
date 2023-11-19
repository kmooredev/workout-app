import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // no two users can have the same username
    },
    email: {
      type: String,
      required: true,
      unique: true, // no two users can have the same email
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
