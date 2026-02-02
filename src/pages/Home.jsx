import React from 'react'
import logo from '../assets/logo.png'
import './home.css'
import ScrollVelocity from '../component/text-scroll/ScrollVelocity'
import sigiriya from '../assets/sigiriya.jpg'
import { motion } from 'framer-motion';
import SplitText from "..//component/SplitText/SplitText";

function Home() {
  return (
    <>
      <div className='home'>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className='hero'>
          <motion.p className="mainText"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >Explore Sri Lanka
          </motion.p>
          <SplitText className='description main-description' text="Sri Lanka is rich in heritage and history. The island is home to hundreds of culturally and historically significant sites, ancient kingdoms, sacred temples, and breathtaking natural landmarks." />
        </div>
        <motion.div className="homeCards"
          initial={{ y: 50, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="card">
            <p className="topic">History and Heritage</p>
            <p className="description">Sri Lanka has long occupied an important role at the crossroads of the Indian Ocean. Located at the heart of major ancient trade routes, the island has connected cultures, religions, and civilizations for centuries.</p>
          </div>
          <div className="card">
            <p className="topic">People and Culture</p>
            <p className="description">Sri Lanka has a rich culture shaped by the diversity of its people, which has formed the foundation of the island’s cultural identity.</p>
          </div>
        </motion.div>
      </div>
      <ScrollVelocity
        texts={['Welcome to Sri Lanka! ¡Bienvenidos a Sri Lanka! ශ්‍රී ලංකාවට ඔබව සාදරයෙන් පිළිගනිමු! இலங்கை வரவேற்கிறது!']}
        velocity={40}
        className="custom-scroll-text"
      />
      <div className='home-bottom'>
        <motion.p className="home-bottom-text"
          initial={{ y: 50, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Sri Lanka, known as the “Pearl of the Indian Ocean,” is a beautiful island nation famous for its rich history, stunning landscapes, and vibrant culture. From golden beaches and lush tea plantations to ancient temples and wildlife sanctuaries, Sri Lanka offers something special for every traveler. Warm hospitality and delicious cuisine make every visit unforgettable.
        </motion.p>

      </div>
    </>
  )
}

export default Home