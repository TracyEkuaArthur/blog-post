import mongoose from "mongoose";

// Getting the connection string
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("Plese provide coonection string in the .env.local file");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.com) {
    return cached.com;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(MONGO_URL, opts)
      .then((mongoose) => mongoose);

    cached.com = await cached.promise;
    return cached.conn;
  }
}
export default dbConnect;
