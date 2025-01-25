import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import GalleryButton from './buttons/GalleryButton';
import InputButton from './buttons/InputButton';
import NamesButton from './buttons/NamesButton';
function Footer() {
    return (
        <div className="footer">
            <InputButton/>
{/*            <NamesButton/>
*/}            <GalleryButton />
        </div>
    );
}

export default Footer;
