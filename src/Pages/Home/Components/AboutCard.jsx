import React, { useEffect } from 'react'
import { styles } from '../../../styles'
import { FaRegCircle } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const listItemVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3, // Stagger by 0.3 seconds
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  })
};

const AboutCard = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.3
  })

  useEffect(() => {
    if (inView) {
      controls.start(i => "visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <div ref={ref} className='p-4 glass-card h-[450px] w-full sm:w-1/2 flex flex-col gap-4 items-center justify-center'>
      <ol className='grid gap-5'>
        {["Extensive Collection", "User-Friendly Interface", "Personalized Recommendations", "Accessible Anytime", "Constantly Updated"].map((text, i) => (
          <motion.li
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={listItemVariants}
            className={`${styles.sectionSubText} font-bold flex justify-start gap-3`}
          >
            <FaRegCircle size={30} color='#50C878' /> {text}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export default AboutCard
