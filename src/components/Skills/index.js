import { useEffect, useState } from 'react'
import {


    faGithub,
    faHtml5,
    faJava,
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faC } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // Create a variable to hold the timeout
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);
    //using container about-page design, so refer to About/index.scss for design about below code
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', ' s', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        My skills revolve mostly around machine learning, web-development, and back-end applications. I'm comfortable coding with
                        <span className='prog-langs'>
                            Python, C++, C, HTML5, CSS3, and Java.
                        </span>
                        I'm also familiar with Git, Linux, Windows, GDB and python packages like numpy and pandas.
                    </p>

                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faC} color="#00008b" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faJava} color="#F89820" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faPython} color="#306998" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faHtml5} color="#E34c26" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color="#000000" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-clip-rotate-multiple" />
        </>
    )
}

export default Skills
