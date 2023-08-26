import React, {useState} from 'react';
import Link from 'next/link';
import LoginButton from "@/app/components/Auth/LoginButton/LoginButton";

const Navbar: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(true);

    const handleNavbarBurgerClick = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav className={isNavbarOpen?"open-navbar":"closed-navbar"}>
            <div className="navbar-start">
                <button className="button is-primary has-text-dark" onClick={handleNavbarBurgerClick}>{isNavbarOpen?"Close Navbar":"Open nabar"}</button>
            </div>
            <div className="navbar-menu">
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
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <LoginButton></LoginButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

