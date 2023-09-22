import React, { FC } from 'react';
import S from './ProductDetailsRow.module.css';

interface ProductDetails {
  images: string[],
  name: string,
  company: string,
  price: number,
  category: string,
  stocks: number
}

interface PossibleProps {
 data: ProductDetails
}

const capitalizer = (input: string): string => {
  let f:string = input[0].toUpperCase();
  let remaining: string = input.slice(1 , input.length);

  return `${f}${remaining}`;
}

const ProductDetailsRow:FC<PossibleProps> = ({data}) => {
  const currencySeperator = new Intl.NumberFormat('en-IN');




  return (
    <div className={S.Row}>
              <div><img src={data?.images[0]} alt="" width={50} height={50} loading='lazy' className={S.prodImg}/></div>
              <div style={{textAlign: 'center'}}><h6>{data?.name.slice(0, 16)}</h6></div>
              <div><h4>{data?.company.toUpperCase()}</h4></div>
              <div><h4>₹{currencySeperator.format(data?.price)}</h4></div>
              <div><h4>{capitalizer(data?.category)}</h4></div>
              <div><h4>{currencySeperator.format(data?.stocks)}</h4></div>
    </div>
  )
}


export default ProductDetailsRow;
