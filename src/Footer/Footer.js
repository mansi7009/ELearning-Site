import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'
// import LanguageIcon from '@mui/icons-material';
// import Link from 'react';
// import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <div className='footer'>
        <div className='footer1'>
            <div className="footer1_Content">
                <h3>Teach the world online</h3>
                <p>Create an online video course, reach students across the globe, and earn money</p>
            </div>
            <button>Teach World</button>
        </div>
        <div className="footer2">
          <div className = "footer2_Contents">
            <div>
              <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>Help and Support</li>
              </ul>
            </div>
            <div>
            <ul>
                <li>Teach on EDL</li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Terms</li>
                <li>Privacy Policy</li>
                <li>Cookie settings</li>
              </ul>
            </div>
          </div> 
          <button><FontAwesomeIcon icon="fa-light fa-globe" />English</button>
        </div>
        <div className='footer3'>
        <FontAwesomeIcon icon="fa-solid fa-copyright" /> @2022 EDL Pvt.Ltd
        </div>
    </div>

  )
}
export default Footer;