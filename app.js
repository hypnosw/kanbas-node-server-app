import express from "express";
import Hello from "./src/hello.js";
import Lab5 from "./src/Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen(4000)