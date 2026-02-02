import React, { useState } from "react";
import { Data } from "./Data";
import "./Destinations.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

function Destinations() {
  const [index, setIndex] = useState(0);
  const [bg, setBg] = useState(Data[0].background);

  const nextImage = () => {
    const nextIndex = (index + 1) % Data.length;

    const img = new Image();
    img.src = Data[nextIndex].background;

    img.onload = () => {
      setBg(img.src);
      setIndex(nextIndex);
    };
  };

  const prevImage = () => {
    const prevIndex = (index - 1) % Data.length;

    const img = new Image();
    img.src = Data[prevIndex].background;

    img.onload = () => {
      setBg(img.src);
      setIndex(prevIndex);
    };
  };

  return (
    <>
      <motion.div
        className="destonation-heead"
        key={index}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center'
        }}
      >
        <div className="des-data-area">
          <motion.p
            key={index}
            initial={{
              y: 15,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            viewport={{ once: true }}
            className="des-title">{Data[index].name}</motion.p>
          <motion.p
            key={index}
            initial={{
              y: 15,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 1.3
            }}
            className="des-type">{Data[index].type}</motion.p>
        </div>
        <div className="des-button-area">
          <button className="next" onClick={prevImage}>
            <span>PREVIOUS</span>
            <span className="icon"><ChevronRight size={20} /></span>
          </button>
          <button className="previous" onClick={nextImage}>
            <span>NEXT</span>
            <span className="icon"><ChevronLeft size={20} /></span>
          </button>
        </div>
        <div className="des-description-area">
          <motion.p
            key={index}
            initial={{
              y: 15,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 1.8
            }}
            viewport={{ once: true }}
            className="des-description">
            <span className="count">{Data[index].count}</span><br />{Data[index].description}
          </motion.p>
        </div>
      </motion.div>
      <div className="gallery">
        <motion.p
          initial={{
            y: 15,
            opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay:0.5
          }}
          
          className="gallery-title">Curated Views</motion.p>
        <motion.p
          initial={{
            y: 15,
            opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay:1
          }}
          className="gallery-description">Explore the destination through captivating images</motion.p>
        <div className="gallery-images">
          {Data[index].galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery image ${i + 1}`}
              className="gallery-item"
              loading="lazy"
            />
          ))}

        </div>
      </div>
    </>
  );
}

export default Destinations;
console.log(Data)
