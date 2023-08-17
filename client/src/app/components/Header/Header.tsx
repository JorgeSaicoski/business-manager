import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/dashboard">
                    <a>Dashboard</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
