import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URI || "");

    connection.isConnected = db.connections[0].readyState;

    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error);

    // Gracefully exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;
