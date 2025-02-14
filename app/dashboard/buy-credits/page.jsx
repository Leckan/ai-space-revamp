"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { Button } from '@/components/ui/button';
import { db } from '@/config/db';
import { usersTable } from '@/config/schema';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

function BuyCredits() {
    const creditOption = [
        {
            credits: 5,
            amount: 0.99
        },
        {
            credits: 10,
            amount: 1.99
        },
        {
            credits: 25,
            amount: 3.99
        },
        {
            credits: 50,
            amount: 6.99
        },
        {
            credits: 100,
            amount: 9.99
        }
    ]

    const [selectedOption, setSelectedOption] = useState([]);
    const {userDetail, setUserDetail} =useContext(UserDetailContext);
    const router = useRouter();

    const onPaymentSuccess= async()=>{
        console.log("Payment Success...")
        //Update user credit in DB
        const result = await db.update(usersTable)
        .set(
            {
                credits:userDetail?.credits+selectedOption?.credits
            }
        ).returning({id:usersTable.id})

        if(result)
        {
            setUserDetail(prev=>({
                ...prev,
                credits:userDetail?.credits+selectedOption?.credits
            }))
            router.push('/dashboard')
        }
    }

    return (
        <div>
            <h2 className='font-bold text-2xl'>Buy More Credits</h2>
            <p>Unlock endless possibilities - Buy more credits and transform your room with AI magic!✨🛋️</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5 mb-20'>
                {
                    creditOption.map((item, index) => (
                        <div className={`flex flex-col gap-2 justify-center items-center rounded-md hover:scale-105 transition-all border-2 p-5
                    ${selectedOption?.credits == item.credits && 'border-primary'}
                    `}>

                            <h2 className='font-bold text-3xl'>{item.credits}</h2>
                            <h2 className='font-medium text-xl'>Credits</h2>

                            <Button className='w-full' onClick={() => { setSelectedOption(item); selectedOption(item) }}>Select</Button>
                            <h2 className='font-medium text-primary'>${item.amount}</h2>
                        </div>
                    ))
                }
            </div>

            <div className='mt-20'>
                {selectedOption?.amount &&
                    <PayPalButtons style={{ layout: "horizontal" }} 
                    onApprove={()=>onPaymentSuccess()}
                    onCancel={()=>console.log("Payment canceled")}
                    onError={()=>console.log("Payment error")}
                    createOrder={(data, actions)=>{
                        return actions?.order.create({
                            purchase_units:[
                                {
                                    amount:{
                                        value:selectedOption?.amount?.toFixed(2),
                                        currency_code:'USD'
                                    }
                                }
                            ]
                        })
                    }}
                    />

                }
            </div>
        </div>
    )
}

export default BuyCredits