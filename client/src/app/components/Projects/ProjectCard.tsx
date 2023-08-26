import React from 'react';
import Project from "@/models/Project";

interface ProjectCardProps {
    project: Project; // Optional Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project}) => {
    return (
        <div className="card" >
            <div className="card-content">
                <h2 className="title is-4">{project.name}</h2>
                <p>Client: {project.client}</p>
                {project.totalHours && <p>Total Hours: {project.totalHours}</p>}
            </div>
        </div>

    );
};

export default ProjectCard;
