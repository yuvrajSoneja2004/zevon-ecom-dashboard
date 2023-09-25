"use client";
import React , {FC} from 'react';
import S from './AuthUsers.module.css';
import AuthUserRow from '../AuthUserRow/AuthUserRow';

interface PropsObj {

}


interface AvilProps {
    authData: PropsObj[],
    refreshHandler: () => any
}

const AuthUsers:FC <AvilProps> = ({authData , refreshHandler}) => {

    console.log(authData , "lalala")

  return (
    <div className={S.whole}>
        {
            authData?.map((user) => {
                return <AuthUserRow  details={user} handleRefresh={refreshHandler}/>
            })
        }
        
    </div>
  )
}

export default AuthUsers