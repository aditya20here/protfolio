
import React from 'react'
import youtube from '../../data/images/youtube.png'
import github from '../../data/images/github.png'


const Card = (props) => {
    const { data } = props
    return (

        <>

            <div className="card">
                <div className="card-content">
                    <div className="card-image">
                        <img src={data.projectImage} alt="project" />
                    </div>
                    <div className='content'>
                        <div className="card-heading">
                            <h2>{data.projectTitle}</h2>
                        </div>
                        <div className="main">
                            <div className="source">
                                <p>{data.projectSource}</p>
                            </div>
                            <div className="description">
                                <p>{data.projectDescription}</p>
                            </div>
                            <div className="demo-links">
                                <a href={data.youtubeLink} target='_black'>
                                    <img
                                        src={youtube}
                                        alt="youtube"
                                        width={20}
                                    /></a>

                                <a href={data.githubLink} target='_black'>
                                    <img
                                        src={github}
                                        alt="github"
                                        width={20}
                                        style={{
                                            marginLeft: '1em'
                                        }}
                                    /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card