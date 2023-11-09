import Database from "../Database/index.js";
function CourseRoutes(app) {
    const courses = Database.courses;
    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = req.body;
        const index = Database.courses.findIndex((c) =>
                                                    c._id === id);
        Database.courses[index] = {...course};
        res.send(JSON.stringify(Database.courses));
    });
    app.get("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = Database.courses
            .find((c) => c._id === id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.send(course);
    });

    app.get("/api/courses", (req, res) => {
        res.send(courses);
    });
    app.post("/api/courses", (req, res) => {
        const course = { ...req.body,
            _id: new Date().getTime().toString() };
        courses.push(course);
        res.send(course);
    });
    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        Database.courses = Database.courses
            .filter((c) => c._id !== id);
        res.sendStatus(204);
    });


}
export default CourseRoutes;