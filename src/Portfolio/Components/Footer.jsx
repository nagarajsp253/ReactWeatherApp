import React from 'react';
import './FooterStyles.css';
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitch, FaTwitter, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:'white', marginRight:'2rem'}}/>
                <div>
                    <p>123 Housing Society</p>
                    <p>Bangalore 560056</p>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color:'white', marginRight:'2rem'}}/>
                  12345-567890</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color:'white', marginRight:'2rem'}}/>
                  reactpage@gmail.com</h4>
            </div>
        </div>
        <div className='right'>
           <h4>About this react page</h4>
           <p>This page is completely built on react concepts and made it as a portfolio site.</p>
           <div className='social'>
           <FaFacebook size={20} style={{color:'white', marginRight:'1rem'}}/>
           <FaTwitter size={20} style={{color:'white', marginRight:'1rem'}}/>
           <FaLinkedin size={20} style={{color:'white', marginRight:'1rem'}}/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
