import React from 'react';
import { useSession } from "next-auth/react";



const ProjectCard: React.FC = () => {
    const { data } = useSession()
    return (
        <div className="buttons">
            {data ? (
                <div className="button is-success">
                    <span>Welcome, !</span>
                    <button className="button is-light">Logout</button>
                </div>
            ) : (
                <button className="button is-info">Login</button>
            )}
        </div>
    );
};

export default ProjectCard;


