import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="custom-navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <span className="icon">
                        <i className="mdi mdi-forwardburger mdi-24px"></i>
                    </span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link href="/" passHref>
                        <p className="navbar-item">Home</p>
                    </Link>
                    <Link href="/about" passHref>
                        <p className="navbar-item">About</p>
                    </Link>
                    <Link href="/services" passHref>
                        <p className="navbar-item">Services</p>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <p className="button is-primary">Sign Up</p>
                            <p className="button is-light">Log In</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

