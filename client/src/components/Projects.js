import React from "react";
import { Link } from "react-router-dom";

function Projects(){
    return(
        <div>
            <h1>Projects Page</h1>
            <button>
                <Link to="/projects/storage">
                    Simple Storage
                </Link>
            </button>
        </div>

    );
}

export default Projects;