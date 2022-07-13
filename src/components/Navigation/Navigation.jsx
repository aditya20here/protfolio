import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='navContent'>
                    <ul >
                        <li><a href='#about' >About {/*& Skills*/}</a></li>
                        <li><a href='#projects'>Projects</a></li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Navigation