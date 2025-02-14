import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div >
      <Link className='flex gap-2 items-center justify-center mb-10' href={"https://www.thinkzonellc.com"} target="_blank">
                <Image src={'/thinkzone.png'} width={40} height={40} alt='Think zone llc'/>
                <h2 className='font-bold text-sm'>Powered by Think Zone LLC</h2>
</Link>

                
            </div>
            
  )
}
export default Footer