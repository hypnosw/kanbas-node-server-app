import React from "react";

export const CourseCard = ({course}) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{course.name}</h5>
                        <p className="card-text">The class starts on: {course.startDate}
                           <br/> ends on: {course.endDate}</p>

                        <a href="#" className="btn btn-primary"></a>
                    </div>
            </div>
        </div>
    );
}