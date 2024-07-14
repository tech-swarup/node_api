const mongoose= require('mongoose')         //Object Data Modeling(ODM)

//Arrow function making use of async & await
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`);
  }
};

module.exports= connectDB