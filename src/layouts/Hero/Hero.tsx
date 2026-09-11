import heroImage from "@/assets/images/heroImage.png"
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
  <img
    className={styles.heroImage}
    src={heroImage}
    alt="Smart TV streaming interface"
  />

  <div className={styles.heroContent}>
    <p className={styles.eyebrow}>SMART TV / OTT DEVELOPER</p>

    <h1>
      Building modern streaming
      <span> experiences.</span>
    </h1>

    <p className={styles.description}>
      I’m a Frontend / OTT Developer specialized in building modern, high-performance Smart TV applications and streaming experiences. I focus on creating fast, reliable and intuitive products across Samsung, LG, Hisense and Philips platforms.
    </p>

    <a href="#projects" className={styles.heroButton}>
      View Projects
    </a>
  </div>
</section>
  )
}



export default Hero