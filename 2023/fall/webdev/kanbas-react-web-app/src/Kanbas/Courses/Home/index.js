import React from "react";
import ModuleList from "../Modules/ModuleList";
import "./index.css";
import {
    FaBell,
    FaCheck,
    FaFile,
    FaFileImport,
    FaPlus,
    FaSpeakap,
    FaSpeakerDeck
} from "react-icons/fa";
import "./index.css";
import {FaEllipsis} from "react-icons/fa6";


function Home() {
    return (
        <div className="row m-1 justify-content-between">
            <div className="col wd-main-content">
                <div className="d-flex wd-buttons-container">
                        <button type="button" className="btn wd-switch-buttons">Collapse
                            All
                        </button>
                        <button type="button" className="btn wd-switch-buttons">View Progress</button>

                        <div className="dropdown">
                            <button className="btn dropdown-toggle wd-switch-buttons" type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <FaCheck/>Publish All
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtojn1">
                            </ul>
                        </div>
                        <button type="button" className="btn btn-danger">
                            <FaPlus/>Module
                        </button>

                        <button type="button" className="btn btn-outline-dark wd-switch-buttons
                         wd-detail-btn">
                            <FaEllipsis/>
                        </button>
                </div>
                <hr/>
                <div>
                    <h2>Home</h2>
                    <ModuleList/>
                </div>

            </div>
            <div className="col-3 wd-status">
                <h2>Status</h2>
                <div className="row wd-status-bar-list">
                    <button type="button" className="btn">
                        <FaFileImport/> Existing Content</button>
                    <button type="button" className="btn">Import from Commons</button>
                    <button type="button" className="btn">Choose Home Page</button>
                    <button type="button" className="btn">View Course Stream</button>
                    <button type="button" className="btn">
                         New Acnnouncement</button>
                    <button type="button" className="btn">New Analytics</button>
                    <button type="button" className="btn">
                        <FaBell/> Course Notification</button>
                </div>
                <div className="wd-todo-list">
                    <h5>To Do</h5>
                    <hr/>


                </div>
            </div>

        </div>
    );
}
export default Home;