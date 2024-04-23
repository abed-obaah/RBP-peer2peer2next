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