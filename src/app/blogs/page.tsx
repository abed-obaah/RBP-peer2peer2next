"use client";


import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import Banner from './constant/Banner';
import BlogSpotlightDisplay from './constant/BlogSpotlightDisplay';
import BlogCard from './constant/BlogCard';

const Blogs = () => {
    return (
        <BaseLayout>
            <Banner />
            <BlogSpotlightDisplay />
            <BlogCard />
        </BaseLayout>
    );
};

export default Blogs;
