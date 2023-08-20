"use client"

import React from "react";
import Project from "@/app/interfaces/Project";
import Head from "next/head";
import ProjectCard from "@/app/components/Projects/ProjectCard";
import "./global.css"
import Link from "next/link";
import Header from "@/app/components/Header/Header";

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
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Header></Header>
            <section className="section">
                <div className="container">
                    <h1 className="title">Recent Projects</h1>
                    <div className="columns is-multiline">
                        {sampleProjects.map((project:Project, index:number) => (
                            <div className="column is-4" key={index}>
                                <Link href={`/project/${project.name}`}>
                                        <ProjectCard project={project} />
                                </Link>
                            </div>
                        ))}
                        <div className="column is-4">
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <button className="button is-fullwidth" onClick={addProject}>
                                            <p>Add New Project</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}


