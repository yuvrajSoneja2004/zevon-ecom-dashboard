"use client"
import React, { FC, useEffect, useState } from 'react'
import S from './products.module.css';
import ProductDetailsRow from '@/components/ProductDetailsRow/ProductDetailsRow';
import axios from 'axios';


 const page:FC = () => {

  type PossibleLoading =  true | false;
  

  const [data , setData] = useState([]);
  const [isLoading , setIsLoading] = useState<PossibleLoading>(false)

  const getData = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get("https://purple-anemone-veil.cyclic.app/asending");
    setData(data);
  } catch (error) {
    
  }
  finally {
      setIsLoading(false);

    }
    
  }


  useEffect(() => {
    getData()
  } , [])


  return (
   <>
      <div className={S.whole}>
      <button>ADD NEW PRODUCT</button>
      <div className={S.allProductsList}>
          <h3 style={{marginBottom: '20px'}}>All Products Overview</h3>
        
         <div className={S.headingRow}>
            <div><h4>Image</h4></div>
            <div><h4>Name</h4></div>
            <div><h4>Brand Name</h4></div>
            <div><h4>Price</h4></div>
            <div><h4>Category</h4></div>
            <div><h4>Stocks</h4></div>
          </div>
          {
           !isLoading ?  data?.map((prod, i) => {
              return <ProductDetailsRow  data={prod} key={i}/>
            }) : <div className={S.loaderS}>
              <span className={S.loader}></span>
            </div>
          }

      </div>
  </div>
   </>
  )
}

export default page;
