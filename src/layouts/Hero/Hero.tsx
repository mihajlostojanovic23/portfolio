import { useState } from "react";

import heroInfo from '@/layouts/Hero/hero.constants';
import heroImage from "@/assets/images/heroImage.png";
import videoIntro from "@/assets/videos/intro.mp4";

import styles from "./Hero.module.css";

const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section className={styles.hero}>
      <img
        className={styles.heroImage}
        src={heroImage}
        alt="Smart TV streaming application"
      />

      <video
        className={`${styles.heroVideo} ${
          videoEnded ? styles.heroVideoEnded : ""
        }`}
        src={videoIntro}
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
      />

      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>
          {heroInfo.category}
        </p>

        <h1>
          {heroInfo.title}
        </h1>

        <p className={styles.description}>
          {heroInfo.description}
        </p>

        <a href="#projects" className={styles.heroButton}>
          {heroInfo.buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;