"use client"

import React from 'react';
import Project from "@/app/interfaces/Project";
import ProjectCard from "@/app/components/Projects/ProjectCard";
import Head from "next/head";


const sampleProjects: Project[] = [
    {
        name: 'Project A',
        client: 'Client X',
        totalHours: 15,
    },
    {
        name: 'Project B',
        client: 'Client Y',
        totalHours: 15,
    },
];

const HomePage: React.FC = () => {
    const handleAddProjectClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.target);
        console.log(event.currentTarget);
    };

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <h1>Recent Projects</h1>
            {sampleProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}

            <button onClick={handleAddProjectClick}>
                <p>Add New Project</p>
            </button>
        </div>
    );
};

export default HomePage;