"use client"
import axios from "axios"
import React, { ChangeEvent, FormEvent, useState } from "react"

export default function createProjectPage() {
    const [formData, setFormData] = useState({
        name: "",
        client: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const newProject = await axios.post("/api/projects/create", {
            name: formData.name,
            client: formData.client
          });
          console.log(newProject)
    }
    return (
        <div className="column">
            <div className="hero-body is-justify-content-center is-align-items-center">
                <form onSubmit={handleSubmit} className="columns is-flex is-flex-direction-column box">
                    <h2 className="title has-text-centered">
                        Create a new Project
                    </h2>
                    <div className="field column">
                        <label className="label">Project Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter the project's name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field column">
                        <label className="label">Client</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter the client's name"
                                name="client"
                                value={formData.client}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="field column">
                        <div className="control">
                            <button className="button is-primary" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );


}