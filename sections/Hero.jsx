'use client';
import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex justify-center items-center z-10 flex-col relative">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading} >METAVERSE</motion.h1>

        <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
          <h1 className={styles.heroHeading}>MA</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>NESS</h1>
        </motion.div>
      </div>

      <motion.div variants={slideIn('right,tween', 0.2, 1)}></motion.div>
    </motion.div>
  </section>
);

export default Hero;
