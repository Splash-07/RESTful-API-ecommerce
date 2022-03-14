require("dotenv").config();
import express from "express";
import config from "config";
import cors from "cors";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(deserializeUser);

app.use(router);

const port = config.get("port");

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`);

  connectToDb();
});

// import ProductModel from "./model/product.model";
// import { products } from "./utils/file";
// const importData = async () => {
//   try {
//     await ProductModel.deleteMany({});

//     await ProductModel.insertMany(products);

//     console.log("Data Import Success");

//     process.exit();
//   } catch (error) {
//     console.error("Error with data import", error);
//     process.exit(1);
//   }
// };

// importData();
