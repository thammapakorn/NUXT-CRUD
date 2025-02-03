import mongoose from "mongoose";
// nitro has to be imported as a type, otherwise it will throw an error
import type { Nitro } from "nitropack";

// Nitro plugin
export default async (_nitroApp: Nitro) => {
  //run your connect code here
  const config = useRuntimeConfig();
  console.log(config.MONGO_URI)
  // connect to mongodb
  mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log(`Connected to DB`))
    .catch((e) => console.log(e));
};