"use client"
import React, { FC, useEffect, useState } from 'react'
import S from './products.module.css';
import ProductDetailsRow from '@/components/ProductDetailsRow/ProductDetailsRow';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import {ImCancelCircle} from 'react-icons/im';
import AddProductModal from '@/components/AddProductModal/AddProductModal';
import { axiosInstance } from '@/utils/axiosInstance';


 const page:FC = () => {

  type PossibleLoading =  true | false;
  

  const [data , setData] = useState([]);
  const [isLoading , setIsLoading] = useState<PossibleLoading>(false);
  const [isVisible , setIsVisible] = useState<PossibleLoading>(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const {data} = await axiosInstance.get("/asending");
    setData(data);
  } catch (error) {
    console.log(error)
  }
  finally {
      setIsLoading(false);

    }
    

  }

  const toggleBtn = () => {
    setIsVisible(!isVisible);
  }


  useEffect(() => {
    getData()
  } , [])


  return (
   <>
      <div className={S.whole}>
      <button className={S.addBtn} onClick={toggleBtn}> {isVisible ? <ImCancelCircle /> : <FaPlus />}{isVisible ? "CANCEL PRODUCT": "ADD PRODUCT"}</button>
      {isVisible ? <AddProductModal /> : null }
      
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
