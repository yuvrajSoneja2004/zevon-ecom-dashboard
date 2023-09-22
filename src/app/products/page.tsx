import React, { FC } from 'react'
import S from './products.module.css';

 const page:FC = () => {
  return (
    <div className={S.whole}>
        <button>ADD NEW PRODUCT</button>
        <div className={S.allProductsList}>
            <h3>All Products Overview</h3>
        </div>
    </div>
  )
}

export default page;
