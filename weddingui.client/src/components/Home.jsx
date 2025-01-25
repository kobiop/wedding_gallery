/// <reference path="buttons/inputbutton.jsx" />
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './Home.css';

function Home () {

    useEffect(() => {
        const getUserId = () => {
            let userId = localStorage.getItem('userId');
            if (!userId) {
                userId = generateUUID(); // Generate a unique ID if it doesn't exist
                localStorage.setItem('userId', userId);
            }
            return userId;
        };

        const generateUUID = () => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

        // Call getUserId to ensure a userId is generated or retrieved
        getUserId();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="home">
            <Header />
            <Footer />
        </div>
    );
}

export default Home;
