import express from "express";
import Hello from "./src/hello.js";
import Lab5 from "./src/Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import AssignmentRoutes from "./assignments/routes.js";


const app = express();
app.use(
    cors({
             credentials: true,
             origin: process.env.FRONTEND_URL.split(',').map(url => url.trim()),
         })
);

app.use(express.json());
CourseRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);
