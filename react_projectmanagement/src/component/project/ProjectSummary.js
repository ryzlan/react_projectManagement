import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project})=>{
    console.log(project);
    return (
        <div className="card blue-grey darken-1 project-summary z-depth-5">
            <div className="card-content white-text ">
                <span className="card-title header">{project.title}</span>
                <p>Posted By: {project.authorFirstName} {project.authorLastName} </p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()} </p>
            </div>
        </div>

    )
}

export default ProjectSummary;