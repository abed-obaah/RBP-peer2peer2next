"use client";
import React, { useEffect, useState } from 'react';
import { useGetCommentsByBlogQuery } from '../../services/frontendAPI';
import Comment from './Comment';
import { useParams } from 'react-router-dom';

const CommentUI = () => {
    const { id } = useParams();
    const { data: commentList } = useGetCommentsByBlogQuery(id);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setComments(commentList);
    }, [commentList]);

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-12 lg:px-[120px] px-10 py-[50px]'>
                {(comments?.length < 1) && <span>No comments.</span>}
                {(comments?.length > 0) && (
                    <div className='col-span-1 lg:col-span-12'>
                        <h4 className='font-semibold text-[32px] text-center border-b-2 mb-5'>Comments</h4>
                    </div>
                )}
                {comments?.map(comment => (
                    <Comment key={comment.id} name={comment.name} content={comment.content} date={comment.date_created} />
                ))}
            </div>
        </>
    );
};

export default CommentUI;
