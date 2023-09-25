"use client"
import Image from 'next/image'
import styles from './page.module.css'
import DetailsCard from '@/components/DetailsCard/DetailsCard'
import {FaUserFriends, FaCartArrowDown, FaUserCheck} from 'react-icons/fa';
import {HiStatusOnline} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axiosInstance';
import S from "./page.module.css"
export default function Home() {

  interface ApiData {
    totalUsers: number,
    totalProducts: number,
    totalVisitors: number,
    currentlyOnline: number,
  }

  const [dashDetails , setDashDetails] = useState<ApiData>({
    totalUsers: 0,
    totalProducts: 0,
    totalVisitors:0,
    currentlyOnline: 0,
  });

  type OnlyBool = true | false;

  const [isLoading ,setisLoading] = useState<OnlyBool>(false);
  const [refreshState , setRefreshState] = useState(0);

 

  const getData = async () => {
    setisLoading(true)
    try {
      const { data } = await axiosInstance.get("/getDashDetails");
      console.log(data)
      setDashDetails(data);
    } catch (error) {
      console.log(error)
    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
      getData();
  } , [refreshState])


  if(isLoading) return  <span className={S.loader}></span>


  return (
   <div className={styles.whole}>
   <DetailsCard  icon={<FaUserFriends  size={25}/>} title="Total Users" firstData={dashDetails?.totalUsers}/>
   <DetailsCard  icon={<FaCartArrowDown  size={25}/>} firstData={dashDetails?.totalProducts} title="Total Products"/>
   <DetailsCard  icon={<HiStatusOnline  size={25}/>} firstData={dashDetails?.currentlyOnline?.currentlyOnline} title="Currently Online"/>
   <DetailsCard  icon={<FaUserCheck  size={25}/>} firstData={dashDetails?.totalVisitors?.totalVisitors} title="Total Visits"/>
   <button onClick={() => {setRefreshState(prev => prev + 1)}}>refresh</button>
   
   </div>
  )
}
