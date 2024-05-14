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
import Image from 'next/image';

interface SectionProps {
  image: string;
  title: string;
  text: string;
}

const SectionComponent: React.FC<SectionProps> = ({ image, title, text }) => {
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
  );
};

export default SectionComponent;