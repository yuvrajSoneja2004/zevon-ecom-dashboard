"use client"
import React, { FormEvent, useState } from 'react';
import S from './AddProductModal.module.css';
import {MdDriveFileRenameOutline, MdOutlinePriceChange} from 'react-icons/md';
import {BiBuildings, BiCategory} from 'react-icons/bi';
import {BsBoxSeam} from 'react-icons/bs';
import {TbReplace} from 'react-icons/tb';
import {FiEdit} from 'react-icons/fi';
import axios from 'axios';
import { axiosInstance } from '@/utils/axiosInstance';


const AddProductModal = () => {

    interface FormData {
        name: string,
        price: string,
        company: string,
        category: string,
        stocks: string,
        replacement: string,
        description: string
    }
    type OnlyBool = true | false;

    const [inputs , setInputs] = useState<FormData>({
        name: "",
        price: "",
        company: "",
        category: "",
        stocks: "",
        replacement: "",
        description: ""
    });


    const [isTrending , setIsTrending] = useState<OnlyBool>(false);
    const [isBestSeller , setisBestSeller] = useState<OnlyBool>(false);
    const [isOnSale , setisOnSale] = useState<OnlyBool>(false);
    const [isNew , setIsNew] = useState<OnlyBool>(false);
    const [selectedImage , setSelectedImages] = useState([]);
    const [isLoading , setIsLoading] = useState<OnlyBool>(false);

    const handleInputChange = (event: FormEvent<HTMLFormElement>): void => {
        const { name, value }: any =  event.target;
    
        setInputs({
          ...inputs,
          [name]: value,
        });
      };

      const handleCheckBox = (event: FormEvent<HTMLFormElement>): void => {
        setIsTrending(!isTrending);
        setisBestSeller(!isBestSeller);
      }


      const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setIsLoading(true);
            try {
                // Continue
                // const {data} = await axiosInstance.post("")
            } catch (error) {
                
            }
            finally {
                setIsLoading(false);
            }
      }

    //   const handleImageChange = (e: FormEvent<HTMLFormElement>) => {
    //     const files = e.target.files;
      
    //     if (files) {
    //       const imageArray = Array.from(files);
    //       const promises = [];
      
    //       for (let i = 0; i < imageArray.length; i++) {
    //         const file = imageArray[i];
    //         const reader = new FileReader();
      
    //         promises.push(
    //           new Promise((resolve, reject) => {
    //             reader.onload = (event) => {
    //               resolve({
    //                 base64: event.target.result,
    //               });
    //             };
    //             reader.onerror = (error) => {
    //               reject(error);
    //             };
    //             reader.readAsDataURL(file);
    //           })
    //         );
    //       }
      
    //       Promise.all(promises)
    //         .then((base64Images) => {
    //           setSelectedImages(base64Images);
    //           // Now you have an array of objects with image names and their base64 representations.
    //         })
    //         .catch((error) => {
    //           console.error('Error reading images:', error);
    //         });
    //     }
    //   };


    const handleImageChange = (e: FormEvent<HTMLFormElement>) => {
        const files = e.target.files;
    
        if (files) {
          const imageArray = Array.from(files);
          const base64Array: string[] = [];
    
          for (let i = 0; i < imageArray.length; i++) {
            const file = imageArray[i];
            const reader = new FileReader();
    
            reader.onload = (event) => {
              base64Array.push(event.target.result);
              if (base64Array.length === imageArray.length) {
                setSelectedImages(base64Array);
              }
            };
    
            reader.onerror = (error) => {
              console.error('Error reading image:', error);
            };
    
            reader.readAsDataURL(file);
          }
      console.log(selectedImage);
        }}
      

  return (
    <div className={S.whole}>
        <form onSubmit={handleSubmit}>
           <div>
            <div className={S.fieldDiv}><MdDriveFileRenameOutline size={20} style={{marginBottom: '5px'}} />
             <label htmlFor="name-field">Name</label></div>
            <input type="text" id='name-field' name='name' value={inputs.name} onChange={handleInputChange} required/>
           </div>
            {/* --------  */}
           <div>
            <div className={S.fieldDiv}><MdOutlinePriceChange  size={20} style={{marginBottom: '5px'}}/>
             <label htmlFor="price-field">Price (₹)</label></div>
            <input type="number" id='price-field' name='price' value={inputs.price} onChange={handleInputChange}
            required
            />
           </div>
           {/* --------  */}
           <div>
            <div className={S.fieldDiv}><BiBuildings  size={20} style={{marginBottom: '5px'}}/>
             <label htmlFor="company-field">Company</label></div>
            <input type="text" id='company-field' name='company' value={inputs.company} onChange={handleInputChange} required/>
           </div>
           {/* --------  */}
           <div>
            <div className={S.fieldDiv}><BiCategory  size={20} style={{marginBottom: '5px'}}/>
             <label htmlFor="category-field">Category</label></div>
            <input type="text" id='category-field' name='category' value={inputs.category} onChange={handleInputChange} required/>
           </div>
           {/* --------  */}
           <div>
            <div className={S.fieldDiv}><BsBoxSeam  size={20} style={{marginBottom: '5px'}}/>
             <label htmlFor="stocks-field">No. of Stocks</label></div>
            <input type="number" id='stocks-field' name='stocks' value={inputs.stocks} onChange={handleInputChange} required />
           </div>
           {/* --------  */}
           <div>
            <div className={S.fieldDiv}><TbReplace  size={20} style={{marginBottom: '5px'}}/>
             <label htmlFor="replacement-field">Replacement Days Available</label></div>
            <input type="number" id='replacement-field' name='replacement' value={inputs.replacement} onChange={handleInputChange} required/>
           </div>
           {/* --------  */}
           <div>
            <div className={S.fieldDiv}><FiEdit  size={20} style={{marginBottom: '5px'}}/>
             <label htmlFor="desc-field">Product Description</label></div>
            <textarea name="description" id="desc-field" className={S.desc} rows={10} value={inputs.description} onChange={handleInputChange}></textarea>
           </div>
              {/* --------  */}
              <h3>Bool Values</h3>
              <div className={S.boolInputs}>
                <div><input type="checkbox" name="istrending" id="trending-checkbox" value={isTrending} onChange={handleCheckBox}/><label htmlFor="trending-checkbox">is The Product Trending?</label></div>
                <div><input type="checkbox" name="isbestseller" id="bestseller-checkbox" value={isBestSeller} onChange={handleCheckBox} /><label htmlFor="bestseller-checkbox">is The Product Best Seller?</label></div>
                <div><input type="checkbox" name="isonsale" id="sale-checkbox" value={isOnSale} onChange={handleCheckBox}/><label htmlFor="sale-checkbox">is The Product is on sale?</label></div>
                <div><input type="checkbox" name="isnew" id="isnew-checkbox" value={isNew} onChange={handleCheckBox}/><label htmlFor="isnew-checkbox">is The Product New?</label></div>
              </div>
              <h3>Select Product Images</h3>
              <input type="file" multiple accept='image/*' onChange={handleImageChange} required/>
              {selectedImage.length === 0 ? null : <h3>Preview:</h3>}
              <div className={S.imgPreview}>
               
                {
                    selectedImage.map((img) => {
                        return <img src={img} alt='img' width={100} height={100} />
                    })
                }
              </div>
                <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProductModal