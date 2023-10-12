import React from 'react';
import {Link} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";

function Kanbas() {
    return(

        <div className="d-flex">
            <KanbasNavigation/>
            <div>
                <h1>Account</h1>
                <Dashboard/>
                <h1>Courses</h1>
            </div>
        </div>

    );
}
export default Kanbas;