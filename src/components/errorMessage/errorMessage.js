import React from 'react';
import './errorMessage.css';
import img from './error.jpg';


const ErrorMessage = () =>{
    return(
        <>
            <img src={img} alt='error'></img>  {/*src={process.env.PUBLIC_URL + '/img/error.jpg'}*/}
            <span>Error</span>
        </>
    )
} 

export default ErrorMessage;