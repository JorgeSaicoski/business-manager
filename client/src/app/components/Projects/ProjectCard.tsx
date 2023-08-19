import React from 'react';
import Project from "@/app/interfaces/Project";
import styles from "@/app/public/styles/pages/Project.module.scss"

interface ProjectCardProps {
    project: Project; // Optional Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project}) => {
    return (
        <div className={styles.card}>
            <h2>{project.name}</h2>
            <p>Client: {project.client}</p>
            <p>Total Hours: {project?.totalHours}</p>
        </div>
    );
};

export default ProjectCard;
