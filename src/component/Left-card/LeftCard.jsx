import React from 'react'
import './LeftCard.css'
import {motion} from 'framer-motion'
function LeftCard(props) {
    return (
        <div className="about-card-left">
            <motion.img 
            initial={{
                x:-40,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:0.7
            }}
            viewport={{
                once:true,
                amount:0.9
            }}
            src={props.img} alt={props.alt} loading='lazy' />
            <motion.div 
            initial={{
                x:40,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:0.7
            }}
            viewport={{
                once:true,
                amount:0.9
            }}
            className="about-card-details">
                <p className="about-card-title">{props.title}</p>
                <p className="about-card-description">{props.description}</p>
            </motion.div>
        </div>
    )
}

export default LeftCard