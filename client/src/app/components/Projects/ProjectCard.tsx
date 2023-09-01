import React from 'react';
import Project from "@/models/Project";

interface ProjectCardProps {
    project: Project; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project}) => {
    return (
        <div className="card" >
            <div className="card-content">
                <h2 className="title is-4">{project.name}</h2>
                <p>Client: {project.client}</p>
            </div>
            <div className="card-footer">
                <div className="card-footer-item has-text-danger">Delete</div>
                <div className="card-footer-item has-text-success">Edit</div>
            </div>
        </div>

    );
};

export default ProjectCard;
