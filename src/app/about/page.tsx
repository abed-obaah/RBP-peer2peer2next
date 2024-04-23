"use client";

import React from 'react';
import BaseLayout from '../../components/BaseLayout'
import LoginBanner from '../../components/LoginBanner'
import FirstSection from './FirstSelection';
import SecondSection from './FirstSelection';
import Banner from '../constants/Banner';

const About = () => {
  return (
    <BaseLayout>
        <Banner />
        <FirstSection />
        <SecondSection />
        <LoginBanner />
    </BaseLayout>
  )
}

export default About;
