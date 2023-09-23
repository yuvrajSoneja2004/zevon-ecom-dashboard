"use client"
import Image from 'next/image'
import styles from './page.module.css'
import DetailsCard from '@/components/DetailsCard/DetailsCard'
import {FaUserFriends, FaCartArrowDown, FaUserCheck} from 'react-icons/fa';
import {HiStatusOnline} from 'react-icons/hi';
export default function Home() {


  return (
   <div className={styles.whole}>
   <DetailsCard  icon={<FaUserFriends  size={25}/>} firstData="1432" title="Total Users"/>
   <DetailsCard  icon={<FaCartArrowDown  size={25}/>} firstData="5" title="Total Products"/>
   <DetailsCard  icon={<HiStatusOnline  size={25}/>} firstData="1432" title="Currently Online"/>
   <DetailsCard  icon={<FaUserCheck  size={25}/>} firstData="1432" title="Total Visitors"/>
   
   </div>
  )
}
