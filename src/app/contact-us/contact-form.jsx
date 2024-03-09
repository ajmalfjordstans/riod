'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ContactForm() {
  const sendMail = async (values, { resetForm }) => {
    const response = await fetch('https://riod-backend.onrender.com/contact-us', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    if (response.ok) {
      // Form submitted successfully
      console.log('Form submitted successfully.');
      // setSuccessful(true)
      // setTimeout(() => {
      //   setSuccessful(false)
      // }, 2000);
      resetForm()
    } else {
      // Handle error
      console.error('Error submitting form.');
    }
    console.log(response);
  }
  return (
    <div className='container mx-auto px-[5%] lg:px-[10%] py-[60px]'>
      <div className='text-center'>
        <p className='font-[600] text-[28px] md:text-[38px] lg:text-[46px] leading-[38px] lg:leading-[46px]'>Contact Us</p>
        <p className='text-[14px] lg:text-[17px] leading-[25.5px] mt-[15px]'>Feel free to reach us for new project initiatives, product enhancement, technical support. Our team will get back to you promptly.</p>
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          subscribe: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'First name is required';
          }
          if (!values.lastName) {
            errors.lastName = 'Last name is required';
          }
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.subject) {
            errors.subject = 'Subject is required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Handle form submission here
          // console.log(values);
          sendMail(values, { resetForm })
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='flex flex-col gap-2 py-[40px]'>
              <div className='flex flex-col md:flex-row gap-2'>
                <div className='flex flex-col w-[50%]'>
                  <label htmlFor="firstName">First Name*</label>
                  <Field type="text" name="firstName" className='border-[2px] rounded-md p-[10px]' />
                  <ErrorMessage name="firstName" component="div" className="text-[red] text-[12px]" />
                </div>
                <div className='flex flex-col w-[50%]'>
                  <label htmlFor="lastName">Last Name*</label>
                  <Field type="text" name="lastName" className='border-[2px] rounded-md p-[10px]' />
                  <ErrorMessage name="lastName" component="div" className="text-[red] text-[12px]" />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email Address*</label>
                <Field type="email" name="email" className='border-[2px] rounded-md p-[10px]' />
                <ErrorMessage name="email" component="div" className="text-[red] text-[12px]" />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="subject">Subject*</label>
                <Field type="text" name="subject" className='border-[2px] rounded-md p-[10px]' />
                <ErrorMessage name="subject" component="div" className="text-[red] text-[12px]" />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="message">How can we help you?*</label>
                <Field as="textarea" name="message" className='border-[2px] rounded-md p-[10px]' />
              </div>
              <div className='py-[10px]'>
                <label className='flex gap-2'>
                  <Field type="checkbox" name="subscribe" />
                  <p>Sign up to our newsletter and get all of the latest news and updates</p>
                </label>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className='w-full bg-black text-white font-[700] p-[10px]'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
