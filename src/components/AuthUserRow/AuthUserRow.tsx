'use client'
import React, { FC } from 'react';
import S from './UserAuthRow.module.css';
import { MdDelete } from 'react-icons/md';
import { axiosInstance } from '@/utils/axiosInstance';


interface NestedObj {
    _id: number
    userProfilePic: string,
    userName: string,
    userEmail: string,
    userCurrentAddress: string
}

interface AvilProps {
    details: NestedObj,
    handleRefresh: (pev: any) => any
}

const AuthUserRow:FC<AvilProps> = ({details, handleRefresh}) => {

    const deleteUser = async () => {
        try {
           const { data } =  await axiosInstance.delete(`/deleteUser/${details?._id}`);

           if(data){
            handleRefresh(pev => pev + 1)
           }

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(details?._id)

  return (
    <div className={S.whole}>
            <div className={S.usersDetails}>
                <img src={details?.userProfilePic} alt="lol" width={50} height={50}/>
               <div className={S.userText}> <h3>{details?.userName}</h3>
                <p>{details?.userEmail}</p>
                <h4>{details?.userCurrentAddress}</h4>
                </div>
            </div>
            <div className={S.deleteBtn}>
                <button onClick={deleteUser}> <MdDelete size={20}/> Delete User</button>
            </div>
    </div>
  )
}

export default AuthUserRow