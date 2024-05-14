"use client"

import React from 'react'
import 'tw-elements';
import { Carousel } from 'antd';
import BaseLayout from '../../components/BaseLayout'
import LoginBanner from '../../components/LoginBanner'
import LoanImg from '/money.png'
import AccountImg from '/account.png'
import ChooseLoanImg from '/choose.png'
import FinancingImg from '/financing.svg'
import TransparentImg from '/transparent.svg'
import SecureImg from '/secure.svg'
import SpeedyImg from '/speedy_loan.svg'
import AssertFinancingImg from '/asset_financing.svg'
import SMEFinancingImg from '/sme_financing.svg'
import TailoredFinancingImg from '/tailored_financing.svg'
import ConsumerLoanImg from '/consumer_loan.svg'
import CheckMarkIcon from '/checkmark.gif'
import FirstBanner from '/banner-1.png'
import SecondBanner from '/banner-2.png'
import ThirdBanner from '/banner-3.png'
import SliderBanner from '/banner-3.png'
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