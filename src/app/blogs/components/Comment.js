"use client";
import React from 'react';
import moment from 'moment';

const Comment = ({ name, content, date }) => {
    return (
        <div className='lg:col-span-6 rounded-[10px] lg:col-start-4 border p-5 mb-5 flex flex-col'>
            <div className="flex justify-between mb-5">
                <h4 className='text-md font-bold'>{name}</h4>
                <span className="font-bold text-[grey]">{moment(date).startOf('ss').fromNow()}</span>
            </div>
            <hr />
            <p className="my-5 border-b-">{content}</p>
        </div>
    );
};

export default Comment;
