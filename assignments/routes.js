import Database from "../Database/index.js";

function AssignmentRoutes(app){
    app.get("/api/assignments/:cid", (req, res)=>{
        const { cid } = req.params;
        const assignments = Database.assignments.filter((c)=>c.course === cid);
        if (assignments) {
            res.json(assignments);
        } else {
            res.status(404).send("Course not found");
        }
    });

    app.delete("/api/assignments/:cid", (req,res)=>{
        try{
            const { cid } = req.params;
            Database.assignments = Database.assignments.filter((a)=>a._id !== cid);
            res.sendStatus(200);
            // res.send(Database.assignments);
        } catch(error){
            res.status(404).send("Assignment delete failed");
        }
    })
    app.put("/api/assignments/:cid", (req, res)=>{
        const { cid } = req.params;
        const newAssignment = {...req.body};
        const index = Database.assignments.findIndex((a)=> a._id === cid);
        Database.assignments[index] = newAssignment;
        res.sendStatus(200);
    });
    app.post("/api/assignments/", (req, res)=>{
        const newAssignment = {...req.body};
        Database.assignments.push(newAssignment);
        res.sendStatus(200);
    });

}

export default AssignmentRoutes;