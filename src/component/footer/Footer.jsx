import { footer } from 'framer-motion/client'
import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'

function item() {
    return (
        <>
            <footer className='footer'>
                <div className='logo-area'>
                    <img src={logo} alt="footer logo" />
                </div>
                <div className='footer-details'>
                    <h4>More Information</h4>
                    <a href="https://en.wikipedia.org/wiki/Sri_Lanka" target="_blank" rel="noreferrer">Wikipedia</a>
                    <a href="https://www.srilanka.travel/" target="_blank" rel="noreferrer">Official Tourism Site</a>
                    <a href="https://www.lonelyplanet.com/sri-lanka" target="_blank" rel="noreferrer">Lonely Planet</a>
                </div>
            </footer>
            <p className='copyright'>All rights reserved © Ceylon 2026</p>
        </>
    )
}

export default item