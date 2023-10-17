import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

import event from '../../assets/images/event.jpg'
import zapato from '../../assets/images/zapato.png'
const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });



    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }

    const renderPortfolio = () => {
        return (
            <div className="images-container">
                
                  
                       
                            <div className="image-box" >
                                <img 
                                src={zapato}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">Zapato: A Stylish Footwear Heaven</p>
                                    <h4 className="description">
                                    a sleek PHP Laravel site offering seamless browsing, easy cart management, quick checkout. </h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open('https://github.com/Bansi1007/Zapato')}
                                    >View</button>
                                </div>
                            </div>
                        
                            <div className="image-box" >
                                <img 
                                src={event}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">Event Reminder App</p>
                                    <h4 className="description"> An Android Java application for easy reminder management, utilizing SQLite database </h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open('www.google.com')}
                                    >View</button>
                                </div>
                            </div>
                        
                    
                
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio()}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
