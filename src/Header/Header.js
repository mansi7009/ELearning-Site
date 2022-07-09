import React from 'react'
import './header.css'
export default function Header() {
    return (
        <div className='header'>
            <div className="headerLogo">
               <h3>EDL</h3> 
            </div>

            <div className="navbar">
                <a href = "/">Home</a>
                <a href = "/" className = "program">Programs</a>

                <a href = "/">Blog</a>                
                <button>Sign In</button>
            </div>

        </div>

    )
}
