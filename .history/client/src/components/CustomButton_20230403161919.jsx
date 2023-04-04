import React from 'react';
import { snapshot } from 'valtio';
import state from '../store';

const CustomButton = ({type, title, customStyles, handleClick }) => {
    const generateStyle = (type) => {
        if(type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: '#fff'
            }
        }
    }
  return (
    <button 
     className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
     style={generateStyle(type)}
    >
        {title}
    </button>
  )
}

export default CustomButton