import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
  username: string,
  password: string
};

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
  },
);

export const User = mongoose.model('User', userSchema);
