import React from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';



const LoginButton: React.FC = () => {
    const { data } = useSession()
    return (
        <div className="buttons">
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
            {data ? (
                    <button className="button is-danger">Logout</button>
            ) : (
                <Link href="/"><button className="button is-info">Login</button></Link>
            )}
        </div>
    );
};

export default LoginButton;


