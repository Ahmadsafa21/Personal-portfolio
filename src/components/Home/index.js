import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders'


// Default values shown


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' A', 'h', 'm', 'e', 'd', ',']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r',]


    useEffect(() => {
        // Create a variable to hold the timeout
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            < div className="container home-page" >
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span> {'   '}


                        <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                            idx={18} />
                    </h1>
                    <h2> Computer Science Major / AI enthusiast</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div >
            <Loader type="ball-clip-rotate-multiple" />
        </>

    )

}

export default Home

