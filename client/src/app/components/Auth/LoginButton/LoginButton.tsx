"use client"
import React from 'react';
import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from "next/navigation";



const LoginButton: React.FC = () => {
    const { data } = useSession()
    const router = useRouter();

    const handleLogout = () => {
        signOut();
        router.push("/login")
    };

    return (
        <>
            {data ? (
                    <button className="button is-danger" onClick={handleLogout}>Logout</button>
            ) : (
                <><Link href="/signup"><button className="button is-warning">Register</button></Link><Link href="/login"><button className="button is-info">Login</button></Link></>
            )}
        </>
    );
};

export default LoginButton;


