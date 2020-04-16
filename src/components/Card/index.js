import React from "react";
import "./style.css";
// import webDevProjects from "../../webDevProjects.json";

function Card(props) {
  console.log(props.image);
  console.log(props);
  return (
    <div key={props.id} className="card">
      {/* <img src={require("../../images/employeeDirectory.png")} /> */}
      <img
        // src={require(`../${props.image}`)}
        src={props.image}
        className="card-img-top"
        alt={props.card_title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.card_title}</h5>
        <p className="card-text">
          {props.card_text}
          <ul className="technologies">
            {props.technologies.map(projects => (
              <li key={projects.id}>{projects}</li>
            ))}
          </ul>
        </p>
        <a
          href={props.project_repo}
          className="btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Project Repo
        </a>
        <br></br>
        <a
          href={props.deployed_project}
          className="deploy btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Deployed Project
        </a>
      </div>
    </div>
  );
}

export default Card;
