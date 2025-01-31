import mongoose from "mongoose";

//This is the schema()It defines the structure of the documents.I need is a model
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// { timestamps: true } is a shorthand that automatically adds two fields to the schema:

// createdAt: Records the date and time when the document was created.
// updatedAt: Records the date and time when the document was last updated.

// {
//     "_id": "64f8dbfe94a5245c3c2f1df3",
//     "name": "Sample Name",
//     "description": "Sample Description",
//     "createdAt": "2025-01-05T12:00:00.000Z",
//     "updatedAt": "2025-01-05T12:00:00.000Z"
//   }


// A Mongoose model is a compiled version of the schema that connects to a specific MongoDB collection. It provides methods to interact with the database, such as find, create, update, and delete.
const User = mongoose.model("Users", userSchema);
export default User;