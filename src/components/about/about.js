import React from "react";
import "./about.css"
import Footer from "../footer/footer";

const About = () => {
    return (
        <div class="about" id="about">
            <div class="about-content">
                <h1>about</h1>
                <div class="about-bio">
                    <p>
                        I am a full-stack software engineer interested in tech that will change the human experience. 
                    </p>
                    <br />
                    <p>
                        Early in my career, I analyzed geospatial data as a Solutions Engineer at Orbital Insight, a Sequoia-backed startup in Silicon Valley. This was my first exposure to engineering and frontier tech. <a href="https://orbitalinsight.com/blog/fuel-petrochemical-supply-chain" target="_blank">Here</a> is an example of projects worked on 
                    </p>
                    <br />
                    <p>
                        I also worked at Scale Venture Partners, a venture capital fund that focuses on investing in B2B SaaS startups. The most valuable thing I learned was how to develop a strong opinion even when uncertainty is the prevailing factor. <a href="https://www.scalevp.com/blog/robin-healthcare-cracking-the-code-on-ai-in-the-exam-room" target="_blank">Here</a> is the announcement from one of the deals I helped close. 
                    </p>
                    <br />
                    <p>
                        I graduated from Princeton University, where I was elected Vice President of my class. If not coding, I can usually be found outdoors. Most recently, I completed the Salkantay Trek in Peru. 
                    </p>
                </div>
                {/* <p>VC turned software engineer. Interested in tech that is going to change the world. Can usually be found outdoors if not coding. </p>
                <br />
                <p>Past gigs:</p>
                <ul>
                    <li>Senior Solutions Engineer at <a class="navbar-menu-link" href="https://orbitalinsight.com/">Orbital Insight</a> <span role="img" aria-label="dog">🌎</span></li>
                    <li>VC at <a class="navbar-menu-link" href="https://www.scalevp.com/">Scale Venture Partners</a> <span role="img" aria-label="dog">🤑</span></li>
                    <li>Student at Princeton University <span role="img" aria-label="dog">🐯</span></li>
                </ul> */}
                <br />

            </div>
            <Footer class="about-footer"/>
        </div>
    )
}

export default About;