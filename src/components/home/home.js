import React from "react";
import "./home.css"
import Footer from "../footer/footer";

const Home = () => {
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
