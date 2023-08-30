import React from "react";

import "./footer.css"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { MdMail } from "react-icons/md"

const Footer = () => {
    return (
        <div class="footer">
            <a href="https://github.com/mishkebab" class="icon" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mishabansal/" class="icon" target="_blank"><FaLinkedinIn /></a>
            <a href="mailto:mishabansal7@gmail.com" class="icon" target="_blank"><MdMail /></a>
        </div>
    )
}

export default Footer;