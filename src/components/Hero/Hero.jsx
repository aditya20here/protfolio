
// import { Avatar } from '@mui/material'
import React from 'react'
import me from '../../data/images/user.png'
import linkedin from '../../data/images/linkedin.png'
import instagram from '../../data/images/instagram.png'
import leetcode from '../../data/images/leetcode.png'
import hackerRank from '../../data/images/icons8-hackerrank-32.png'
import github from '../../data/images/github.png'

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

                <div className="profiles">
                    <a target={'_black'}
                        className="linkedin"
                        href='https://www.linkedin.com/in/aditya-basude-987965209/'>
                        <img
                            width={20}
                            src={linkedin}
                            alt="Linkedin"
                        />
                        Linkedin
                    </a>
                    <a target={'_black'}
                        className="instagram"
                        href='https://www.instagram.com/aditya_basude_/'>
                        <img
                            width={20}
                            src={instagram}
                            alt="Instagram"
                        />
                        Instagram
                    </a>
                    <a target={'_black'}
                        className="github"
                        href='https://github.com/ADITYAbasude'>
                        <img
                            width={20}
                            src={github}
                            alt="Github"
                        />
                        Github
                    </a>
                    <a target={'_black'}
                        className="leetcode"
                        href='https://leetcode.com/Aditya13777/'>
                        <img
                            width={20}
                            src={leetcode}
                            alt="LeetCode"
                        />
                        LeetCode
                    </a>
                    <a target={'_black'}
                        className="hackerRank"
                        href='https://www.hackerrank.com/adityabasude13'>
                        <img
                            width={20}
                            src={hackerRank}
                            alt="Hacker Rank"
                        />
                        Hacker Rank
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <a href='#about'>
                        <button className='know-more-btn' >
                            Know more
                        </button>
                    </a>
                </div>
            </div>
        </div >

    )
}

export default Hero