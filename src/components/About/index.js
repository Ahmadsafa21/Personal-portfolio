import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

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


      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About