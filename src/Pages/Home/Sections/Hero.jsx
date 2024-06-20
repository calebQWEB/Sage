import React from "react";
import {useNavigate} from 'react-router-dom'
import {showLoginModal} from '../../../ReduxSlices/loginModalSlice'
import { styles } from "../../../styles";
import { useState } from "react";
import { useEffect } from "react";
import { heroImage } from "../../../constants";
import Button from '../../../components/common/Button'
import { motion } from "framer-motion";
import {useDispatch} from 'react-redux'

import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../../../firebase.config'

const Hero = () => {
  const navigate = useNavigate()

  const heroText = ["Page", "Brain cell", "Sage", "Book"];
  const [heroChangeCount, setHeroChangeCount] = useState(0);
  const [user, setUser] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroChangeCount(prev => (prev >= 3 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalId);
  }, [heroChangeCount])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return unsubscribe
  }, [user])

  const showLoginOptions = () => {
    if (user) {
      navigate('/user-page')
    } else {
      dispatch(showLoginModal())
    }
  }

  return (
    <>
      <section className="min-h-full">
        <div className="flex flex-col-reverse items-center sm:justify-between sm:flex-row text-center sm:text-start">
          <article className="grid gap-6">
            <h1 className={`${styles.heroHeadText} text-gray-100`}>
              Read with Sage
            </h1>
            <p className={`${styles.heroSubText} text-text`}>
              Your ultimate online library for every stage of your reading
              journey. Join us in changing the world, one <span className="text-headers">{heroText[heroChangeCount]}</span> at a time.
            </p>

            <div className="flex gap-2 items-center justify-center sm:justify-normal">
              <Button text='Start Reading' borderColor='accent' click={showLoginOptions}/>
              <Button text='Try Premium' borderColor='accent'/>
            </div>
          </article>

          <picture className="sm:right-0 sm:bottom-0 sm:w-full">
            <img src={heroImage[heroChangeCount].Imagelink} alt="3d Illlustration" />
          </picture>
        </div>
      </section>
      <div className="hidden sm:block bg-gray-400 w-full h-1" />
    </>
  );
};

export default Hero;
