import React from 'react'
import { motion } from 'framer-motion';
import './about.css'
import SplitText from '../component/SplitText/SplitText';
import aim from '../assets/aim.webp'
import history from '../assets/history.webp'
import langiage from '../assets/language.webp'
import currency from '../assets/currency.webp'
import tradition from '../assets/tradition.webp'
import LeftCard from '../component/Left-card/LeftCard';
import RightCard from '../component/right-card/RightCard';

function About() {
  return (
    <div>
      <div className="about-head">
        <motion.p
          initial={{ y: 50, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, display: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className='about-title'>
          About Us
        </motion.p>
        <SplitText className='about-main-description' text="Discover Sri Lanka’s hidden gems and breathtaking landscapes" />
      </div>
      <div className="about-middle">
        <p className="about-middle-title">
          Sri Lanka, a paradise that inspires
        </p>
        <p className="about-middle-description">
          A uniquely Sri Lankan experience awaits this winter
        </p>
        <div className="about-card-area">
          <LeftCard
            img={aim}
            alt='our aim image'
            title='Our Mission'
            description='Discover Sri Lanka with us! Our mission is to showcase the island’s rich history, stunning landscapes, and vibrant culture. From ancient temples and historic cities to pristine beaches and lush mountains, we provide travelers with insights, guides, and tips to experience the very best of Sri Lanka. Whether you’re seeking adventure, relaxation, or cultural exploration, we’re here to help you create unforgettable memories in this beautiful paradise.'
          />
          <div className="horizontal-line"></div>
          <RightCard
            img={history}
            alt='history image'
            title='HISTORY'
            description='Sri Lanka, the “Pearl of the Indian Ocean,” is rich in history and culture spanning over 3,000 years. Home to ancient kingdoms, monumental architecture, and vibrant traditions, visitors can explore cities like Anuradhapura and Polonnaruwa, where stupas, palaces, and irrigation systems reveal early ingenuity. Colonial influences from the Portuguese and Dutch to the British have left marks on architecture, cuisine, and life. Wandering historic temples, admiring centuries-old frescoes, or discovering royal heritage, travelers experience a story both fascinating and enduring.'
          />
          <div className="horizontal-line"></div>
          <LeftCard
            img={tradition}
            alt='CULTURE image'
            title='CULTURE'
            description='Sri Lanka’s culture is a rich blend of history, tradition, and diversity shaped by centuries of heritage. The island is home to ancient museums, colourful festivals, traditional performing arts, and a unique cuisine. From the world-famous Kandy Esala Perahera and Vesak celebrations to classical dance forms such as Kandyan, Low Country, and Sabaragamuwa dancing, culture plays an important role in daily life. Sri Lanka is also renowned for its handicrafts, tea heritage, and warm hospitality, making it a vibrant destination for cultural tourism.'
            />
            <div className="horizontal-line"></div>
            <RightCard
            img={langiage}
            alt='LANGUAGES image'
            title='LANGUAGES'
            description='Sri Lanka is a multilingual country with a rich linguistic heritage. Sinhala and Tamil are the official languages, while English is widely used as a link language in education, administration, and tourism. Sinhala is spoken by the majority of the population, while Tamil is mainly spoken by Sri Lankan Tamils, Indian Tamils, and Muslim communities. In addition, several minority and indigenous languages such as Sri Lankan Malay, Vedda, and Sri Lankan Portuguese Creole are spoken. This linguistic diversity reflects Sri Lanka’s multicultural history and colonial influences'
            />
            <div className="horizontal-line"></div>
            <LeftCard
            img={currency}
            alt='CURRENCY image'
            title='CURRENCY & PAYMENTS'
            description='The official currency of Sri Lanka is the Sri Lankan Rupee (LKR). Cash is commonly used for small purchases, while credit and debit cards are accepted in hotels, restaurants, and major shopping areas. ATMs are widely available across cities and popular tourist destinations, making payments easy and convenient for visitors.'
            />
        </div>
      </div>
    </div>
  )
}

export default About