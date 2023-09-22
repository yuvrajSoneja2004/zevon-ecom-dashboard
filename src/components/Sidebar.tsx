"use client"
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components';
import SiteLogo from '../assets/logo.png';
import {BsGrid1X2, BsPCircleFill, BsPeople} from 'react-icons/bs';
import Link from 'next/link';

function Sidebar() {

    const dashOptions = [
        {
            title: "Dashboard",
            path: "/",
            icon:  <BsGrid1X2  fill="#fff"/>
        },
        {
            title: "Products",
            path: "/products",
            icon:  <BsPCircleFill  fill="#fff"/>
        },
        {
            title: "Visitors",
            path: "/visitors",
            icon:  <BsPeople  fill="#fff"/>
        },
    ]



  return (
    <Whole>
        <div className='wholeList'>
        <Image src={SiteLogo} width={100} height={35} alt='site-logo' />
            {
                dashOptions.map((item ,i) => {
                    return <Link key={i} className='dashItem' href={item.path}>
                        {item.icon}
                        <p>{item.title}</p>
                    </Link>
                })
            }
        </div>
        <div className='bottom-user'>
                <Image src='https://cdn-icons-png.flaticon.com/512/219/219959.png' width={30} height={30} alt=';;'/>
                <h4>Yuvraj</h4>
                <button>Logout</button>
            </div>
    </Whole>
  )
}


const Whole  = styled.div`
    height: 100vh;
    width: 240px;
    background: #1a2332;
    padding: 10px 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;

    
    .wholeList {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 20px;
        
    }


    .dashItem {
        display: flex;
        text-decoration: none;
        align-items: center;
        gap: 10px;

        p {
            font-size: 14px;
            color: #fff;
        }
    }


    .bottom-user {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 20px;
        color: #fff;

        button {
            padding: 5px 10px;
        }
    }
`
export default Sidebar