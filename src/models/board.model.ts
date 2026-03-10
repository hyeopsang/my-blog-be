import { Schema, model, Document } from "mongoose";

export interface IBoard extends Document {
  title: string;
  content: string;
  author: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const boardSchema = new Schema<IBoard>(
  {
    title: {
      type: String,
      required: [true, "제목은 필수입니다"],
      minlength: [2, "제목은 2자 이상이어야 합니다"],
      maxlength: [100, "제목은 100자 이하여야 합니다"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "내용은 필수입니다"],
      minlength: [10, "내용은 10자 이상이어야 합니다"],
    },
    author: {
      type: String,
      required: [true, "작성자는 필수입니다"],
      minlength: [2, "작성자는 2자 이상이어야 합니다"],
      maxlength: [20, "작성자는 20자 이하여야 합니다"],
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Board = model<IBoard>("Board", boardSchema);
