import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/B.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'n', 's', 'i'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    return (
        <>
      
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i,</span> <br />

                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={1} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />


                </h1>
                <h2>Front End Developer</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
         
        </div>
        <Loader type='pacman'/>
        </>
    );
};

export default Home;
