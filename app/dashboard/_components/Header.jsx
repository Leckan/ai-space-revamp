"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

function Header() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext)
    return (
        <div className='p-5 shadow-sm flex justify-between items-center'>
             <Link href={'/dashboard'}>
             <div className='flex gap-2 items-center'>
           
                <Image src={'/thinkzone.png'} width={40} height={40} alt='logo'/>
                <h2 className='font-bold text-lg'>AI Space Revamp</h2>
                
            </div></Link>
            <Link href={'/dashboard/buy-credits'}>
            <Button variant="ghost" className="rounded-full text-primary">Buy More Credits</Button>
            </Link>
            <div className='flex gap-7 items-center '>
                <div className='flex gap-2 p-1 items-center bg-slate-200 px-3  rounded-full'>
                    <Image src={'/star.png'} width={20} height={20} alt='star'></Image>
                    <h2>{userDetail?.credits}
                    </h2>
                </div>
                <UserButton />
            </div>
        </div>
    )
}

export default Header