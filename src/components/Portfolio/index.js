import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";

const Portfolio = () => {
    const[letterClass,setLetterclass]=useState('text-animate');
    return (
        <>
     
        <div className="container portfolio-page">
            <h1 className="page-title">Portfolio</h1>
           <AnimatedLetters
           letterClass={letterClass}
           strArray={"portfolio".split("")}
           idx={15}

           />

        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default Portfolio;
