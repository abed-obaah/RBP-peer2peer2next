"use client"


import React, { useState, useEffect } from 'react';
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
// import {Link} from 'react-router-dom'
// import { useGetTestimonialsQuery } from '../../utils/frontendAPI';
interface TestimonialItem {
    id: number;
    content: string;
    name: string;
  }
  
  const Testimonial: React.FC = () => {
    const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  
    useEffect(() => {
      const fetchTestimonials = async () => {
        try {
          const response = await fetch('https://loantest-api.rivbnk.tradeofficeapps.com/testimonial');
          if (!response.ok) {
            throw new Error('Failed to fetch testimonials');
          }
          const data: TestimonialItem[] = await response.json();
          setTestimonials(data);
        } catch (error) {
          console.error('Error fetching testimonials:', error);
        }
      };
  
      fetchTestimonials();
    }, []);
  
    return (
      <div className='grid grid-cols-1 lg:grid-cols-7 lg:px-20 px-10 py-10 lg:mt-40 mt-20 bg-[#f5faf3]'>
        <div className='lg:col-span-3 lg:col-start-3 flex flex-col'>
          <p className="text-[#5C9575] text-[1.5rem] font-semibold mb-3">TESTIMONIALS</p>
          <h1 className='lg:text-[3.0rem] text-[1.9rem] text-[#4A9A71]  font-[ubuntu] text-center font-bold lg:leading-[80px] leading-[45px]'>Join the hundreds giving the gift of choice</h1>
          <Carousel className='mt-10' autoplay>
            {testimonials.map(item => (
              <div key={item.id} className="relative">
                <div className="p-10 bg-[#E4F2DE]">
                  <p className="text-[#38403A] text-[20px] leading-[30px] mb-10">{item.content}</p>
                  <span className="font-semibold text-[18px]">{item.name}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };

export default Testimonial;