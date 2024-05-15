"use client"

import React from 'react'
import 'tw-elements';

// import AssertFinancingImg from '@/public/asset_financing.svg'
// import SMEFinancingImg from '@/public/sme_financing.svg'
// import TailoredFinancingImg from '@/public/tailored_financing.svg'
// import ConsumerLoanImg from '@/public/consumer_loan.svg'

// import SecondBanner from '@/public/banner-2.png'

import ServiceComponent from './SectionComponent';
import Image from 'next/image';


const OurServices = () => {
    const content = [
        {
          "image": "https://i.postimg.cc/26mcZv1W/consumer-loan.png",
          "title": "Consumer Loans",
          "content": "Riverbank Partners Limited provides affordable consumer loans."
        },
        {
          "image": "https://i.postimg.cc/FRZPgRSB/asset-financing.png",
          "title": "Asset Financing",
          "content": "Riverbank partners can assist you with its asset-backed financing solution."
        },
        {
          "image": 'https://i.postimg.cc/76x96kRM/sme-financing-Copy.png',
          "title": "SME Financing",
          "content": "Riverbank Partners Limited is the partner you can always trust."
        },
        {
          "image": 'https://i.postimg.cc/NFFx6xBK/tailored-financing-Copy.png',
          "title": "Tailored Financing",
          "content": "We provide the best tailored financing solution"
        },
    ]
    return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-20 px-10  flex-col-reverse lg:mt-40 mt-20'>
        <div className="hidden lg:block">
          <Image src="https://i.postimg.cc/bNQZ6trr/banner-2.png" width={500} height={500}  alt="banner"/>
        </div>
        <div>
          <p className="text-[#5C9575] text-[1.5rem] font-semibold mb-3">OUR SERVICES</p>
            <h3 className="lg:text-[4.0em] text-[3.0em] font-[ubuntu] font-semibold lg:leading-[70px] leading-[50px] mb-5">Entirely providing the best services</h3>
            <div className="grid xs:grid-cols-1 grid-cols-2 mt-10">
                  {content.map( item => <ServiceComponent image={item.image} title={item.title} text={item.content} /> ) }
            </div>
          </div>
          <div className="lg:hidden">
            <Image src="https://i.postimg.cc/bNQZ6trr/banner-2.png" width={500} height={500}  alt="banner"/>
          </div>
      </div>
    )
  }


  export default  OurServices;