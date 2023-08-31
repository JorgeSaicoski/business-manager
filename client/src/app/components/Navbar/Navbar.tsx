import React from 'react';
import Link from 'next/link';
import LoginButton from "@/app/components/Auth/LoginButton/LoginButton";

const Navbar: React.FC = () => {

    return (
        <aside className="navbar-menu column is-one-fifth">
            <div className="navbar-start">
                <Link href="/" passHref>
                    <p className="navbar-item">Home</p>
                </Link>
                <Link href="/about" passHref>
                    <p className="navbar-item">Projects</p>
                </Link>
                <Link href="/services" passHref>
                    <p className="navbar-item">Tasks</p>
                </Link>
                <Link href="/services" passHref>
                    <p className="navbar-item">Team</p>
                </Link>
                <div className="buttons">
                    <LoginButton></LoginButton>
                </div>
            </div>
        </aside>
    );
};

export default Navbar;

