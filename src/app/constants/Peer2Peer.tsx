"use client"

import React from 'react'
import 'tw-elements';
import { Carousel } from 'antd';
import BaseLayout from '../../components/BaseLayout'
import LoginBanner from '../../components/LoginBanner'
import LoanImg from '../../assets/icons/money.png'
import AccountImg from '../../assets/icons/account.png'
import ChooseLoanImg from '../../assets/icons/choose.png'
import FinancingImg from '../../assets/icons/financing.svg'
import TransparentImg from '../../assets/icons/transparent.svg'
import SecureImg from '../../assets/icons/secure.svg'
import SpeedyImg from '../../assets/icons/speedy_loan.svg'
import AssertFinancingImg from '../../assets/icons/asset_financing.svg'
import SMEFinancingImg from '../../assets/icons/sme_financing.svg'
import TailoredFinancingImg from '../../assets/icons/tailored_financing.svg'
import ConsumerLoanImg from '../../assets/icons/consumer_loan.svg'
import CheckMarkIcon from '../../assets/icons/checkmark.gif'
import FirstBanner from '../../assets/images/banner-1.png'
import SecondBanner from '../../assets/images/banner-2.png'
import ThirdBanner from '../../assets/images/banner-3.png'
import SliderBanner from '../../assets/images/banner-3.png'
// import {Link} from 'react-router-dom'
// import { useGetTestimonialsQuery } from '../../utils/frontendAPI';
import SectionComponent from './SectionComponent';
import Image from 'next/image';



const Peer2Peer = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:px-20 px-10 place-items-center lg:mt-40 mt-20">
          <div className='lg:col-span-3 mb-10'>
              <p className='uppercase text-[#5C9575] text-[1.5rem] font-semibold mb-3'>Peer 2 peer</p>
              <p className="text-[2rem] lg:text-[4rem] font-[ubuntu] font-bold lg:leading-[68px] leading-[34px] mb-10">Lend someone their dreams while you take a step into your financial freedom</p>
              <a href="#" className="border-2 border-[#355774] rounded-full px-10 py-3 text-lg  text-sm text-[#292929]">Learn More</a>
          </div>
          <div className="lg:col-span-5 flex justify-end w-full">
            <Image src={ThirdBanner} alt="banner-3"/>
          </div>
      </div>
    )
}

export default Peer2Peer;