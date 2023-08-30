import React from "react";

import "./navbar.css"

const NavBar = () => {
    return (
        <div class="navbar">
            <h1 class="navbar-heading">Misha Bansal</h1>
            <div class="navbar-menu">
                <li class="navbar-menu-item">
                    <a href="/" class="navbar-menu-link">about</a>
                </li>
                <li class="navbar-menu-item">
                    <a href="/projects" class="navbar-menu-link">projects</a>
                </li>
            </div>
        </div>
    )
}

export default NavBar;