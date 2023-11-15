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
             origin: "https://a5--mellow-druid-bd88f7.netlify.app/#/",
         })
);

app.use(express.json());
CourseRoutes(app);

AssignmentRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
});