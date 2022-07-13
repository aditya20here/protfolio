import { Avatar } from '@mui/material'
import React from 'react'
import user from '../../data/images/user.png'
import { Row, Col } from 'react-bootstrap'
const AboutAndSkills = () => {
    return (
        <>
            <div id='about' className='heading'>
                <h1>About{/* & Skills*/}</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div className='about-and-skills-content'>
                    <div>
                        {/* <h4 className='small-about-heading' >About me</h4> */}
                        <div className="about-me-content">
                            <div className="my-self">
                                <Avatar className='avatar' src={user} alt="user photo" />
                                <p >
                                    Hello, I'm Aditya Basude and i am a Full-stack web and App developer.
                                    Currently, I'm pursuing a diploma at Pravin Patil Diploma college
                                    as a Computer Engineer student.
                                </p>
                                <p>
                                    I started my programming journey in 2020 with java language
                                    to develop the app for android. Currently, I'm working with
                                    JavaScript, Kotlin, Java, and C.
                                </p>
                                <p>
                                    I like Competitive programming and i solved more than 100+
                                    problems in HackerRank and LeetCode elegantly.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="skills">
                        <div className='skill-heading'>
                            <h3>Skills</h3>
                        </div>
                        <div className='skill-content'>
                            <div className="web-tools">
                                <h4>Web Development Tools</h4>
                                <hr />
                                <p>HTML, React, Css, Node.js, JavaScript,
                                    Redux, Scss, Tailwind, Bootstrap, MongoDB, MySql, Material UI
                                </p>
                            </div>
                            <div className="app-tools">
                                <h4>App Development Tools</h4>
                                <hr />
                                <p>Java, Kotlin, JetPack Compose, MVVM, RoomDatabase, FireBase
                                </p>
                            </div>
                            <div className="tools">
                                <h4>Development Tools</h4>
                                <hr />
                                <p>Github</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default AboutAndSkills