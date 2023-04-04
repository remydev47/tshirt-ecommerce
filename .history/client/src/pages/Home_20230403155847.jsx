import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation, headTextAnimation, slideAnimation
} from '../config/motion';

import state from '../store'

const Home = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img 
                       src='./threejs.png'
                       alt='logo'
                       className='w-8 h-8 abject-contain'
                    />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden' />BUILD SOMETHING TOGETHER
                        </h1>
                    </motion.div>
                    <motion.div>
                        <p>
                            Create your unique and exclusive shirt with our
                            brand-new 3d customization tool.<strong>unleash your imagination</strong>{" "}
                            and define your own style
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home