import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import '../kanbas-styles.css';
import courses from "../Database/courses.json";
import {CourseCard} from "./courseCard";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <div className="wd-page-container">
                <h1>Dashboard</h1>
                <hr/>
                <h2 className="m-2 p-0">Published Courses({courses.length})</h2>

                <div className="d-flex flex-row col-9 justify-content-around flex-wrap">
                    {
                        courses.map(
                            course => {
                                return (<CourseCard course={course}/>);
                            }
                        )
                    }
                </div>


                </div>

        </div>
    );
}
export default Dashboard;