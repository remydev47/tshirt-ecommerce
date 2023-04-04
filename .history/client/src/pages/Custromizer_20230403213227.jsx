import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio';
import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { dowloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIpicker, ColorPicker, CustomButton, Filepicker, Tab } from '../components'
const Custromizer = () => {
  return (
    <motion.div></motion.div>
  )
}

export default Custromizer