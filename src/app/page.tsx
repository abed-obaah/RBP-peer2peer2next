

import React from 'react';
import Layout from './layout';



import BaseLayout from '../components/BaseLayout';
import HomeSlider from './constants/HomeSlider';
import ShortContent from './constants/ShortContent';
import LoginBanner from '../components/LoginBanner';
// import { useGetTestimonialsQuery } from '../utils/frontendAPI';
import Testimonial from './constants/Testimonial';
import HowItWorks from './constants/HowItWorks';
import OurServices from './constants/OurServices';
import Peer2Peer from './constants/Peer2Peer';

const Home = () => {
  return (
    <Layout>
      <BaseLayout>
        <HomeSlider />
        <ShortContent />
        <HowItWorks />
        <OurServices />
        <Peer2Peer />
        <Testimonial />
        <LoginBanner />
      </BaseLayout>
    </Layout>
  );
};

export default Home;
