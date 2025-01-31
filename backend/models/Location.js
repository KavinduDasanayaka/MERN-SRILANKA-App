import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    usercountry: {
      type: String,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const LocationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    detail: { type: String, required: true },
    type: [{ type: String }],  //change cast to type
    reviews: [reviewSchema],
    score: { type: Number, required: true },
    numReviews: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", LocationSchema);
export default Location;