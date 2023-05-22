import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js";

function Body(){
    return (
        <>
            <h1>Header</h1>
            <ol>
                <li>Job</li>
                <li>Money</li>
                <li>More Money</li>
        </ol>
        </>
    );
}
function Page(){
    return(
        <>
            <Header/>
            <Body/>  
            <Footer/>
        </>
    );
}

function Footer(){
    return (
        <footer>
            @ 20xx Development. All rights reserved.
        </footer>
    );
}

let root = document.getElementById("root");
ReactDOM.render(<Page />, root);
