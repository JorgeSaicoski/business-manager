import React from 'react';
import Project from "@/models/Project";
import Employee from "@/models/Employee";


interface ProjectCardHoursProps {
    project: Project;
    totalHours: number;
    employee: Employee;
}

const ProjectCardHours: React.FC<ProjectCardHoursProps> = ({ project, totalHours, employee }) => {
    return (
        <div className="project-card">
            <h2>{project.name}</h2>
            <p>Client: {project.client}</p>
            <p>Total Hours: {totalHours}</p>
            <h3>Employee</h3>
            <p>Name: {employee.name}</p>
            <p>Position: {employee.position}</p>
        </div>
    );
};

export default ProjectCardHours;