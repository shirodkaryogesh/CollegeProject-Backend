import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import { getErrorMessage } from "./utils";
const PORT = 3000;

const app = express();
app.use(express.json({ limit: "100mb" }));
app.use("/api", routes);

mongoose
  .connect(
    "mongodb+srv://user:user123@cluster0.p3carlj.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "Dietdatabase" }
  )
  .then(() => {
    console.log("Connected to mongodb sucessfully");
    return app
      .listen({ port: PORT })
      .addListener("listening", () => {
        console.log(`Server running at http://localhost:${PORT}/`);
      })
      .addListener("error", (err) => {
        console.log("err", err);
        console.log("err func", getErrorMessage(err));
      });
  })
  .catch((err) => {
    console.log("err", err);
    console.log(`Failed to connect to server due to ${getErrorMessage(err)}`);
  });
