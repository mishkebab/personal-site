import React from "react";
import "./projects.css"
import Footer from "../footer/footer";
import ScrollImage from "../../assets/scroll-front-image.png"
import RendezImage from "../../assets/rendezview-front-image.png"
import SharkGPTImage from "../../assets/shark-gpt-front-image.png"


const Projects = () => {
    return (
        <div class="projects-page" id="projects">
            <h1 class="projects-header">projects</h1>
            <div class="projects">
                <a class="project-link" href="https://misha-scroll-a1d0e552b8c2.herokuapp.com/" class="navbar-menu-link" target="_blank">
                    <div class="project-item">
                        <div class="project-image-wrap">
                            <img src={ScrollImage} class="project-image"/>
                            <p class="project-description">Harry Potter themed fullstack clone of the business messaging app Slack</p>
                        </div>
                        <h3 class="project-name">Scroll</h3>
                    </div>
                </a>
                <a class="project-link" href="https://smelk.onrender.com/" class="navbar-menu-link" target="_blank">
                    <div class="project-item">
                        <div class="project-image-wrap">
                            <img src={RendezImage} class="project-image"/>
                            <p class="project-description">Simplifies planning events for friends</p>
                        </div>
                        <h3 class="project-name">RendezView</h3>
                    </div>
                </a>
                <a href="https://shark-gpt-app-9bdb98ecb214.herokuapp.com/" class="navbar-menu-link" target="_blank">
                    <div class="project-item">
                        <div class="project-image-wrap">
                            <img src={SharkGPTImage} class="project-image"/>
                            <p class="project-description">Uses ChatGPT to help entrepreneurs pitch their startup ideas to a panel of investors</p>
                        </div>
                        <h3 class="project-name">SharkGPT</h3>           
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;