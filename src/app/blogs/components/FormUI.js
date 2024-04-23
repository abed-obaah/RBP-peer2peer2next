"use client";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSendCommentMutation } from '../../services/frontendAPI';
import openNotification from './Notification';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';

const FormUI = () => {
    const { id } = useParams();
    const [sendComment] = useSendCommentMutation();
    const [loading, setLoading] = useState(false);

    return (
        <div className="flex flex-col lg:p-20 xs:pt-0 sm:pt-0 lg:px-40 p-5">
            <Formik
                initialValues={{ name: '', email: '', content: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.content) {
                        errors.content = 'Required';
                    } else if (values.content.length < 10) {
                        errors.content = "Content length must be greater than 10";
                    }
                    if (!values.name) {
                        errors.name = "Required";
                    } else if (values.name.length < 3) {
                        errors.name = "Name length must be greater than 3";
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    setLoading(true);
                    let msg = '';
                    values.blog = id;
                    sendComment(values).unwrap().then(res => {
                        msg = "Comment sent successfully";
                        openNotification(msg);
                    }).catch(err => {
                        for (const item in err.data) {
                            openNotification(`${item} Field. ${err.data[item][0]}`);
                        }
                    });
                    setSubmitting(false);
                    setLoading(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Spin spinning={loading} delay={500}>
                        <Form className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-y-4 gap-x-2 mt-10 bg-[#F2F9EF] lg:px-[120px] px-5 py-[50px] rounded-[10px]">
                            <h1 className='text-[32px] font-semibold font-[ubuntu]'>Add Comment</h1>
                            <div className="md:col-span-2 lg:col-span-2 flex flex-col">
                                <label>Comment</label>
                                <Field as="textarea" name="content" placeholder='Type your comment here' rows={10} className="border border-[#D0D0D0] px-5 py-5 rounded-[5px] mt-3" />
                                <ErrorMessage name="content" component="span" className='text-[red]' />
                            </div>
                            <div className="flex flex-col">
                                <label>Name</label>
                                <Field type="text" name="name" placeholder='Full Name' className="border border-[#D0D0D0] px-5 h-[50px] rounded-[5px] mt-3" />
                                <ErrorMessage name="name" component="span" className='text-[red]' />
                            </div>
                            <div className="flex flex-col">
                                <label>Email</label>
                                <Field type="email" name="email" placeholder='Enter email address' className="border border-[#D0D0D0] px-5 h-[50px] rounded-[5px] mt-3" />
                                <ErrorMessage name="email" component="span" className='text-[red]' />
                            </div>
                            <button type="submit" className="bg-[#4A9A71] w-40 py-3 rounded-[5px] text-[16px] text-white" disabled={isSubmitting}>Comment</button>
                        </Form>
                    </Spin>
                )}
            </Formik>
        </div>
    );
};


export default FormUI;
