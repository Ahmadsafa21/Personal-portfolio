import { useEffect, useRef } from 'react'

import LogoS from '../../../assets/images/logo-100.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="CS majr"
      />


    </div>
  )
}

export default Logo