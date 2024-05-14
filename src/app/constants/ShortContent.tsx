"use client"

import React from 'react'
import 'tw-elements';
import { Carousel } from 'antd';
import BaseLayout from '../../components/BaseLayout'
import LoginBanner from '../../components/LoginBanner'
import LoanImg from '@/public/icons/money.png'
import AccountImg from '@/public/icons/account.png'
import ChooseLoanImg from '@/public/icons/choose.png'
import FinancingImg from '@/public/icons/financing.svg'
import TransparentImg from '@/public/icons/transparent.svg'
import SecureImg from '@/public/icons/secure.svg'
import SpeedyImg from '@/public/icons/speedy_loan.svg'
import AssertFinancingImg from '@/public/icons/asset_financing.svg'
import SMEFinancingImg from '@/public/icons/sme_financing.svg'
import TailoredFinancingImg from '@/public/icons/tailored_financing.svg'
import ConsumerLoanImg from '@/public/icons/consumer_loan.svg'
import CheckMarkIcon from '@/public/icons/checkmark.gif'
import FirstBanner from '@/public/images/banner-1.png'
import SecondBanner from '@/public/images/banner-2.png'
import ThirdBanner from '@/public/images/banner-3.png'
import SliderBanner from '@/public/images/banner-3.png'

// import { useGetTestimonialsQuery } from '../../utils/frontendAPI';
import SectionComponent from './SectionComponent';









const ShortContent = () => {
    const content = [
      {
        "image": FinancingImg,
        "title": "Tailored Financing",
        "content": "Need specific funding for your personal or business demands? Riverbank Partners Limited provides customized and tailored solutions for you."
      },
      {
        "image": TransparentImg,
        "title": "Transparent Pricing",
        "content": "Need specific funding for your personal or business demands? Riverbank Partners Limited provides customized and tailored solutions for you.",
      },
      {
        "image": SecureImg,
        "title": "Safe and Secure",
        "content": "Our systems are fully secure, providing you with the peace of mind to pursue your dreams safely.",
      },
      {
        "image": SpeedyImg,
        "title": "Speedy Loan Processing",
        "content": "We aim to process all requests within the shortest possible time. Want a loan today? Kindly login and apply."
      }
    ]
    return (
      <div className="lg:p-20 p-10">
          <p className='text-[#5C9575] text-[18px] font-semibold mb-2'>WHY US</p>
          <div className="flex lg:flex-row flex-col">
          <div className="">
              <p className="font-[ubuntu] text-[3rem] lg:text-left font-semibold lg:leading-[80px] leading-[40px] mb-10">Reasons to choose us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
              {content.map( item => <SectionComponent image={item.image} title={item.title} text={item.content} /> ) }
          </div>
      </div>
      </div>
    )
}


export default ShortContent;