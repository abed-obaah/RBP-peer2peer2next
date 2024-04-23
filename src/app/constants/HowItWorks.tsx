"use client"

import React from 'react'
import 'tw-elements';
import { Carousel } from 'antd';
import BaseLayout from '../../components/BaseLayout'
import LoginBanner from '../../components/LoginBanner'
import LoanImg from '../../../public/assets/icons/money.png'
import AccountImg from '../../../public/assets/icons/account.png'
import ChooseLoanImg from '../../../public/assets/icons/choose.png'
import FinancingImg from '../../../public/assets/icons/financing.svg'
import TransparentImg from '../../../public/assets/icons/transparent.svg'
import SecureImg from '../../../public/assets/icons/secure.svg'
import SpeedyImg from '../../../public/assets/icons/speedy_loan.svg'
import AssertFinancingImg from '../../../public/assets/icons/asset_financing.svg'
import SMEFinancingImg from '../../../public/assets/icons/sme_financing.svg'
import TailoredFinancingImg from '../../../public/assets/icons/tailored_financing.svg'
import ConsumerLoanImg from '../../../public/assets/icons/consumer_loan.svg'
import CheckMarkIcon from '../../../public/assets/icons/checkmark.gif'
import FirstBanner from '../../../public/assets/images/banner-1.png'
import SecondBanner from '../../../public/assets/images/banner-2.png'
import ThirdBanner from '../../../public/assets/images/banner-3.png'
import SliderBanner from '../../../public/assets/images/banner-3.png'
import Image from 'next/image';



const HowItWorks = () => {
    return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-20 px-10'>
          <div className='hidden lg:block'>
              <Image src={FirstBanner} alt="banner"/>
          </div>
          <div className="lg:w-11/12">
              <p className="text-[#5C9575] text-[1.5rem]  font-semibold mb-3">HOW IT WORKS</p>
              <h3 className="lg:text-[64px] text-[2.0rem] font-[ubuntu] font-semibold lg:leading-[68px] leading-[34px] mb-5">3 simple steps to get started</h3>
              <div className='flex lg:flex-row flex-col-reverse place-items-center lg:justify-start justify-end mb-10'>
                  <div className='lg:basis-1/2 flex flex-col lg:place-items-start place-items-center justify-center lg:mr-10'>
                    <div className='flex flex-row place-items-center mb-5'>
                      <Image src={AccountImg} width={45} alt="" />
                      <span className="ml-5 text-[0.9rem] text-[#38403A]">Create <br/> Account</span>
                    </div>
                    <p className='text-[1.05rem] text-[#38403A] lg:text-left text-center font-light'>Complete your profile in less than 7 minutes</p>
                  </div>
                  <Image src={CheckMarkIcon} width={140} alt=""/>
              </div>
              <div className='flex lg:flex-row flex-col-reverse place-items-center lg:justify-start justify-end mb-10'>
                  <div className='lg:basis-1/2 flex flex-col lg:place-items-start place-items-center justify-center lg:mr-10'>
                    <div className='flex flex-row place-items-center mb-5'>
                      <Image src={LoanImg} width={45} alt="" />
                      <span className="ml-5 text-[0.9rem] text-[#38403A]">Get a <br/> Loan</span>
                    </div>
                    <p className='text-[1.05rem] text-[#38403A] lg:text-left text-center font-light'>Get Financing/decision from Riverbank Partners within 24hrs</p>
                  </div>
                  <Image src={CheckMarkIcon} width={140} alt="" />
              </div>
              <div className='flex lg:flex-row flex-col-reverse place-items-center lg:justify-start justify-end mb-10'>
                  <div className='lg:basis-1/2 flex flex-col lg:place-items-start place-items-center justify-center lg:mr-10'>
                    <div className='flex flex-row place-items-center mb-5'>
                      <img src={ChooseLoanImg} width={45} alt="" />
                      <span className="ml-5 text-[0.9rem] text-[#38403A]">Select Loan <br/> Type</span>
                    </div>
                    <p className='text-[1.05rem] text-[#38403A] lg:text-left text-center font-light'>Apply for a loan by selecting the most relevant option</p>
                  </div>
                  <Image src={CheckMarkIcon} width={140}  alt="" />
              </div>
              
          </div>
      </div>
    )
  }

  export default  HowItWorks;