import mongoose from "mongoose";



const MONGO_URL = "mongodb://127.0.0.1:27017/questions"; // Replace databasename with your actual database name

const connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connected to the Database");
      resolve();
    })
    .catch((error) => {
      console.error("Connection error:", error);
      reject(error);
    });
  });
};

mongoose.set("strictQuery", true);

export default connect; // Export connect as the default export

