import React from "react";
// he explains why building things this way isn't the best idea around the 28min mark

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar_container">
                    <div><a href="/">Home</a></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="" />
                </div>
            </nav>
        </header>
    )
}