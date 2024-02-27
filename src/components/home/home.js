import React from "react";
import "./home.css"
import { useState, useEffect } from "react";
import Footer from "../footer/footer";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = 'blurred_background.jpg'; // Ensure this path is correct!
        img.onload = () => setIsLoading(false);
        img.onerror = () => {
            console.error("Failed to load the background image.");
            setIsLoading(false); // Optionally, handle this differently
        };
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
            </div>
        );
    }

    return (
        <>
            <div class="home">
                <div class="horizontal-line"></div>
                <h1 class="home-name">
                    MISHA BANSAL
                </h1>
                <div class="horizontal-line"></div>
                <div class="pink-navbar">
                    <a class="pink-navbar-link" href="#about">about</a>
                    <a class="pink-navbar-link" href="#projects">projects</a>
                    <a class="pink-navbar-link" href="#skills">skills</a>
                </div>
                {/* <Footer class="footer" /> */}
            </div>
        </>
    )
}

export default Home;
