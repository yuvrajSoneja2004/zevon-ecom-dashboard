"use client"
import Image from 'next/image'
import styles from './page.module.css'
import DetailsCard from '@/components/DetailsCard/DetailsCard'
import {FaUserFriends, FaCartArrowDown, FaUserCheck} from 'react-icons/fa';
import {HiStatusOnline} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axiosInstance';
export default function Home() {

  interface ApiData {
    totalUsers: number,
    totalProducts: number,
    currentlyOnline: number
  }

  const [dashDetails , setDashDetails] = useState<ApiData>({
    totalUsers: 0,
    totalProducts: 0,
    currentlyOnline: 0
  });

 

  const getData = async () => {
    try {
      const { data } = await axiosInstance.get("/getDashDetails");
      const dashDetails = await axiosInstance.post("/addOnlineUser");
      console.log(dashDetails?.data , 'this is the dashboard data');
      setDashDetails(data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
      getData()
  } , [])

  // console.log(dashDetails);

  return (
   <div className={styles.whole}>
   <DetailsCard  icon={<FaUserFriends  size={25}/>} title="Total Users" firstData={dashDetails?.totalUsers}/>
   <DetailsCard  icon={<FaCartArrowDown  size={25}/>} firstData={dashDetails?.totalProducts} title="Total Products"/>
   <DetailsCard  icon={<HiStatusOnline  size={25}/>} firstData={dashDetails?.currentlyOnline} title="Currently Online"/>
   <DetailsCard  icon={<FaUserCheck  size={25}/>} firstData={1432} title="Total Visitors"/>
   
   </div>
  )
}
