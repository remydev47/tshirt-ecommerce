import React from 'react';
import { SketchPicker } from 'react-color'
import { useSnapshot } from  'valtio'

import state from '../store'


const ColorPicker = () => {
  const snap = useSnapShot(state);

  return (
    <div className='abolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
      />
    </div>
  )
}

export default ColorPicker