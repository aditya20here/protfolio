
// import { Avatar } from '@mui/material'
import React from 'react'
import me from '../../data/images/user.png'
const Hero = () => {
    return (
        <div className="HeroContent" id='Hero'>
            <div>
                <div className="heroImage">
                    <img src={me} />
                </div>
                <div className="introduceMe">
                    <div>
                        <h1>Hi there 👋 I'm Aditya</h1>
                        <div className="bottomLine"></div>
                        <div className="bottomLine"></div>
                        <h3>Full stack web and App developer</h3>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <button className='know-more-btn'>
                        Know more
                    </button>
                </div>
            </div>
        </div >

    )
}

export default Hero