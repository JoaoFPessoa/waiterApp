import express from "express";
import mongoose from "mongoose";
import { router } from "./app/routes";
import path from "node:path";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => console.log("erro ao conectar ao mongo"));
