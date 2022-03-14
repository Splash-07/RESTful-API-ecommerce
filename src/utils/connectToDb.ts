import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connectToDb() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    log.info("Connected to DB");
  } catch (e) {
    log.info("Connect to DB has been failed");
    process.exit(1);
  }
}

export default connectToDb;
