import Database from "../Database/index.js";
function CourseRoutes(app) {
    const courses = Database.courses;

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