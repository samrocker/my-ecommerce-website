import React from 'react'
import Image from 'next/image'
import FacebookLogo from '../../../public/Facebook-Logo.png'
import YoutubeLogo from '../../../public/Youtube-logo.png'
import InstagramLogo from '../../../public/instagram-Logo.png'
import TwitterLogo from '../../../public/twitter-logo.png'

const Footer = () => {
  return (
    <section className='bg-[#E5E7EB] w-full'>
        <main className='max-w-[1380px] m-auto'>
            <div className='h-[50%] w-full flex-between flex-col lg:flex-row'>
                <div className='flex-[1] flex flex-col items-start justify-center'>
                    <h1 className='text-sm font-medium flex gap-1'>
                        <Image src={FacebookLogo} alt=''/>
                    </h1>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Footer