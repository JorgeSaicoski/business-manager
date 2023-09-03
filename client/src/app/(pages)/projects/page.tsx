"use client"
import ProjectCard from "@/app/components/Projects/ProjectCard";
import Project from "@/interfaces/Project";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function ProjectPage() {
    const sampleProjects: Project[] = [
        {
            name: 'Project A',
            client: 'Client X',
            totalHours: 15,
            employees:[]
        },
        {
            name: 'Project B',
            client: 'Client Y',
            totalHours: 15,
            employees:[]
        },
    ];
    const addProject = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.target);
        console.log(event.currentTarget);
    };

    return (
        <section className="column">
        <Head>
            <title>Projects</title>
        </Head>
        
            <div className="container" id="projects">
                <h1 className="title">Recent Projects</h1>
                <div className="columns is-multiline">
                    {sampleProjects.map((project:Project, index:number) => (
                        <div className="column is-4" key={index}>
                            <Link href={`/projects/${project.name}`}>
                                    <ProjectCard project={project} />
                            </Link>
                        </div>
                    ))}
                    <div className="column is-4">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <button className="button is-fullwidth" onClick={addProject}>
                                        <Link href={`/projects/create`}>
                                                <p>Add New Project</p>
                                        </Link>      
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}