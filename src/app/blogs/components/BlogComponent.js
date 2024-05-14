"use client";
import React, { useEffect, useState } from 'react';

import moment from 'moment';
import parse from 'html-react-parser';
import { Spin } from 'antd';

const BlogComponent = ({ blog }) => {
    const [blogDetails, setBlogDetails] = useState(blog);

    return (
        <>
            <div className="grid grid-cols-1 px-[68px] sm:px-4 xs:px-4 ">
                {!blogDetails && <div className='lg:col-span-4 md:col-span-2 col-span-1 text-center'>No valid found</div>}
                {blogDetails && (
                    <div className='col-span-1'>
                        <div className='w-full h-[700px] sm:h-[350px] xs:h-[350px]'>
                            <img src={blogDetails?.cover_image} alt="blog" className="shadow-lg rounded-[20px] w-full h-[700px] sm:h-[350px] xs:h-[350px] align-middle border-none" />
                        </div>
                        <div className='py-20 xs:py-10 sm:py-10'>
                            <span className='text-[#4A9A71]'>{moment(blogDetails?.date_created).startOf('ss').fromNow()}</span>
                            <h1 className='lg:text-[64px] text-3xl font-[ubuntu] font-semibold'>{blogDetails?.title}</h1>
                            {parse(`${blogDetails?.content}`)}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogComponent;

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://loantest-api.rivbnk.tradeofficeapps.com/blog/${id}`);
    const blog = await res.json();

    return {
        props: {
            blog,
        },
    };
}

