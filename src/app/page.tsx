"use client"
import Image from 'next/image'
import styles from './page.module.css'
import DetailsCard from '@/components/DetailsCard/DetailsCard'
import {FaUserFriends, FaCartArrowDown, FaUserCheck} from 'react-icons/fa';
import {HiStatusOnline} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axiosInstance';
import S from "./page.module.css";
import ErrorPic from '../assets/error.png';
import ErrorComp from '@/components/ErrorComp/ErrorComp';
import AuthUsers from '@/components/AuthUsers/AuthUsers';
export default function Home() {

  interface ApiData {
    totalUsers: number,
    totalProducts: number,
    totalVisitors: {
      totalVisitors: number
    },
    currentlyOnline: {
      currentlyOnline: number
    } ,
    authUsers: []
  }

  const [dashDetails , setDashDetails] = useState<ApiData>({
    totalUsers: 0,
    totalProducts: 0,
    totalVisitors: {
      totalVisitors: 0
    },
    currentlyOnline: {
      currentlyOnline: 0
    },
    authUsers: []
  })

   type OnlyBool = true | false;

  const [isLoading ,setisLoading] = useState<OnlyBool>(false);
  const [refreshState , setRefreshState] = useState(0);
  const [isError , setIsError] = useState<OnlyBool>(false);
  const [error , setError] = useState<any>();

 

  const getData = async () => {
    setisLoading(true)
    try {
      const { data } = await axiosInstance.get("/getDashDetails");
      console.log(data)
      setDashDetails(data);
    } catch (error) {
      console.log(error , 'yeah this one');
      setIsError(true);
      setError(error);

    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
      getData();
  } , [refreshState])


  if(isLoading) return  <div className={S.loaderCont}><span className={S.loader}></span></div>
  if(isError) return <ErrorComp msg={error}/>



  return (
   <div className={S.containerS}>
   <div className={styles.whole}>
   <DetailsCard  icon={<FaUserFriends  size={25}/>} title="Total Users" firstData={dashDetails?.totalUsers}/>
   <DetailsCard  icon={<FaCartArrowDown  size={25}/>} firstData={dashDetails?.totalProducts} title="Total Products"/>
   <DetailsCard  icon={<HiStatusOnline  size={25}/>} firstData={dashDetails?.currentlyOnline?.currentlyOnline} title="Currently Online"/>
   <DetailsCard  icon={<FaUserCheck  size={25}/>} firstData={dashDetails?.totalVisitors?.totalVisitors} title="Total Visits"/>
   <button onClick={() => {setRefreshState(prev => prev + 1)}}>refresh</button>
   
   </div>
      <div className={S.wholeAuthUsers}>
      <h1>Authenticated Users</h1>
      <AuthUsers authData={dashDetails?.authUsers} refreshHandler={setRefreshState}/>
      </div>
   </div>
  )
}
