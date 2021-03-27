import React from 'react';
import './Button.css'

const Button=({buttonText,click})=>{
    return(
        <button 
            className="btn"
            onClick={click}
        >
        {buttonText}
        </button>
    )
}

export default Button