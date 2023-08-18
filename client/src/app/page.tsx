"use client"

import React from "react";
import Project from "@/app/interfaces/Project";
import Head from "next/head";
import ProjectCard from "@/app/components/Projects/ProjectCard";
import "./public/styles/styles.css"

export default function Home() {
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
    const addProject = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.target);
        console.log(event.currentTarget);
    };

    return (
        <body>
            <Head>
                <title>Home</title>
            </Head>

            <h1>Recent Projects</h1>
            {sampleProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}

            <button onClick={addProject}>
                <p>Add New Project</p>
            </button>
        </body>
  )
}


