import React from 'react'
import upArrow from '../../data/images/up-arrow.png'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div style={{ textAlign: 'center', margin: '1em' }}>
                    <a href="#" className='up-arrow'>
                        <img src={upArrow} width={25} alt="up-arrow" />
                    </a>
                    <h4>&copy; Developed by Aditya</h4>
                </div>
            </div>
        </>
    )
}

export default Footer