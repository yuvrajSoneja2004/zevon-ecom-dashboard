"use client"
import React, { FC } from 'react';
import S from './styles.module.css'


interface DetailsCardProps {
  icon?: React.ReactElement,
  firstData?: string,
  title?: string
}

const DetailsCard:FC<DetailsCardProps> = ({icon, firstData, title}) => {




  return (
    <div className={S.whole}>
      <div>{icon}</div>
        <span>
        <h3>{firstData}</h3>
        <p style={{marginTop: '6px'}}>{title}</p>
        </span>
   </div>
  )
}





export default DetailsCard