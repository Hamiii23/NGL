import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.model";

export interface IMessage extends Document {
  content: string,
  toUser: IUser
};

const messageSchema = new Schema<IMessage>(
  {
    content: {
      type: String,
      required: true
    },
    toUser: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

export const Message = mongoose.model('Message', messageSchema);
