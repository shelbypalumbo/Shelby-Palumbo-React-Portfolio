import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import webDevProjects from "../../webDevProjects.json";

function Card() {

    return (
        <div className="card">
            <img src={webDevProjects.image} className="card-img-top" alt={webDevProjects.card_title} />
            <div className="card-body">
                <h5 className="card-title">{webDevProjects.card_title}</h5>
                <p className="card-text">
                    {webDevProjects.card_text}
                    <ul className="lang">
                        {webDevProjects.map(projects =>
                            <li key={projects.id}>{projects.technologies}</li>)}
                    </ul>
                </p>
                <Link to={webDevProjects.project_repo} className="btn" target="_blank">Project Repo</Link>
                <Link to={webDevProjects.deployed_project} className="deploy btn" target="_blank">Deployed Project</Link>
            </div>
        </div>
    )
}

export default Card;