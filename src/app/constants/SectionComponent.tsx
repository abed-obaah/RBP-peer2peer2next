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
import Image from 'next/image';



const SectionComponent = ({image, title, text}) => {
    return (
      <div className="flex flex-col lg:flex-row lg:ml-5 mb-10 lg:place-items-start place-items-center">
        <div className="w-[100px] h-[100px] flex place-content-center">
          <Image src={image} width={50} height={50} alt="" className='mb-5' />
        </div>
        <div className="lg:ml-8">
            <h3 className="font-[ubuntu] text-[24px] lg:text-left text-center font-semibold mb-4">{title}</h3>
            <p className="text-[16px] lg:text-justify text-center xs:text-justify text-[#38403A]">{text}</p>
        </div>
      </div>
    )
}

export default SectionComponent;