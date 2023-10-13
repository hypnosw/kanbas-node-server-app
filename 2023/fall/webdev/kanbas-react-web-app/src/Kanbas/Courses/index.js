import db from "../../Kanbas/Database";
import { useParams, Link } from "react-router-dom";
import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import '../kanbas-styles.css';
import CourseNavigation from "./CourseNavigation";



function Courses() {
    const { courseId } = useParams();
    console.log(`courseID: ${courseId}`);
    const course = db.courses.find((course) => course._id === courseId);
    return (

        <div className="wd-main-wrapper">
            <h1 className="wd-breadcrumb-h1">
                <div className="d-flex align-items-center bg-white">
                    <button className="wd-burger-btn">
                        <GiHamburgerMenu className="wdKanbasRed"/>
                    </button>
                    <nav id="wd-bread" aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 ">
                            <li className="breadcrumb-item " aria-current="page">
                                <Link to={`/Kanbas/Courses/${courseId}`}
                                      className="wdListNoLine wdKanbasRed">
                                    CS {courseId}
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Home</li>
                        </ol>
                    </nav>
                </div>
            </h1>
            <hr/>
            <CourseNavigation/>

        </div>
    );
}
export default Courses;