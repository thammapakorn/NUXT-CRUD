import mongoose, { Schema } from "mongoose";

// Book schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    published: {
      type: Date,
      required: true,
    },
    isbn: String,
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
    }],
    pageCount: Number,
  },

  { timestamps: true }
);
export default mongoose.model("Book", schema);
