import React from "react"

export default function Header(){
    return (
        <header>
            <nav className = "navigation">
                <img className="logo" src="rlogo.png"/>
                <ul className="nav-items">
                    <li className="items">Pricing</li>
                    <li className="items">About</li>
                    <li className="items">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

