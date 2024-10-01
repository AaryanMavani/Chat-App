// import mongoose from "mongoose";

// const connectToMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_DB_URI);
//     console.log("Connected To MongoDB");
//   } catch (error) {
//     console.log("Error connecting to MongoDB", error.message);
//   }
// };

// export default connectToMongoDB;

import mongoose from "mongoose";

const connectToMongoDB = () => {
  const mongo_DB_URI = process.env.MONGO_DB_URI;

  if (!mongo_DB_URI) {
    console.error("MongoDB URI is not defined in .env");
    process.exit(1); // Exit the process if no URI is provided
  }

  mongoose
    .connect(mongo_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
      process.exit(1); // Exit the process if there's an error
    });
};

export default connectToMongoDB;
