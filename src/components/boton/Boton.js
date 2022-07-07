import React from 'react';
import './Boton.css'

function Boton(props){
    return(
        <a href={props.link} className="button__link" id={props.buttonid}>
            <button className='button'>
                {props.description}
            </button>
        </a>
    );
}

export default Boton;