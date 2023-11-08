import express from "express";
import Hello from "./src/hello.js";
import Lab5 from "./src/Lab5.js";
import cors from "cors";

const app = express();
app.use(cors());
Lab5(app);
Hello(app);

app.listen(4000)