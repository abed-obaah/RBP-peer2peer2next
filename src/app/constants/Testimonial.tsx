"use client"


import React, { useState, useEffect } from 'react';
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







const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('https://loantest-api.rivbnk.tradeofficeapps.com/testimonial');
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials');
                }
                const data = await response.json();
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