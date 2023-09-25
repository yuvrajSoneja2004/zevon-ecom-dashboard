// "use client"
import React, { FC } from 'react';
import S from './ErrorComp.module.css';
import ErrorPic from '../../assets/error.png';


interface ErrorData {
    message: string
}

 interface AvilProps {
     msg: ErrorData
  }


const ErrorComp: FC<AvilProps> =  ({msg}) => {

       

  return (
    <div className={S.error}>
    <img src={ErrorPic?.src} alt="error" width={600} height={400}/>
    <h2>Something Went Wrong.</h2>
    <p>Cause: {msg?.message}</p>
  </div>
  )
}

export default ErrorComp