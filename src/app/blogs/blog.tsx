"use client";

import React from 'react';
import BaseLayout from '../../components/BaseLayout';
import BlogComponent from './components/BlogComponent';
import FormUI from './components/FormUI';
import CommentUI from './components/CommentUI';

const Blog = () => {
    return (
        <BaseLayout>
            <BlogComponent blog={undefined} />
            <FormUI />
            <CommentUI />
        </BaseLayout>
    );
};

export default Blog;
