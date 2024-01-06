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

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          My name is Ahmed, and I am a senior Computer Science major at Portland State University, anticipating graduation in the fall of 2024. I am actively seeking an internship to gain practical experience in the field and to apply the knowledge I have acquired at PSU to real-world scenarios. I am confident in my ability to work collaboratively within a team. I also believe that hands-on experience is the best way to learn. My primary interest lies in machine learning; however, I am open to exploring various fields to discover what captivates my interest the most.
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
      <Loader type="pacman" />
    </>
  )
}

export default About