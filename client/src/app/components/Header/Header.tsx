import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    My App
                </a>
            </div>
        </nav>
    );
};
;

export default Header;

