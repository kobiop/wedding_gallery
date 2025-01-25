import React from 'react';
import './Header.css';
import NamesButton from './buttons/NamesButton';

function Header() {
    return (
        <header className="header">

            <h1>Kobi & Lina</h1>
            <p>Memories for our wedding</p>
            <NamesButton />

        </header>
    );
}

export default Header;
 