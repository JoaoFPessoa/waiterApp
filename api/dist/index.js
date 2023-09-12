"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./app/routes");
const node_path_1 = __importDefault(require("node:path"));
mongoose_1.default
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = (0, express_1.default)();
    app.use(
      "/uploads",
      express_1.default.static(
        node_path_1.default.resolve(__dirname, "..", "uploads")
      )
    );
    app.use(express_1.default.json());
    app.use(routes_1.router);
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => console.log("erro ao conectar ao mongo"));
