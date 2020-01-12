import React, { Component } from 'react';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Button } from '../styles/ButtonStyles';
import { NavLink } from 'react-router-dom';
import { Mutation } from 'react-apollo'
import { ADD_PRISONER, ALL_PRISONERS } from './queries';
import { Formik, Form, Field, ErrorMessage } from 'formik';
let yup = require('yup');


export default class SignUp extends Component {



    chechLoginDetails = (values, resetForm) => {
        // new prisoner's record  to be saved in database
        let { name, password } = values;

    }


    render() {
        let schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
            name: yup.string().required(),
            phone: yup.number().required(),
        });
        return (
            < SignUpContainer style={{ margin: '0 auto' }}>
                <aside>
                    <NavLink to='/'> BACK </NavLink>

                </aside>
                <Flex style={{ height: '100vh', margin: '0 auto' }}>
                    <div>
                        <header>
                            <h1>SIGNUP</h1>
                            <p>This is a protected route, keep it safe    </p>
                        </header>
                        <Formik

                            initialValues={{ email: '', password: '', phone: '', name: '' }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setTimeout(() => {
                                    this.chechLoginDetails(values, resetForm)
                                    setSubmitting(false);
                                }, 400);
                            }}
                            validationSchema={schema}
                        >
                            {({ isSubmitting, handleSubmit }) => (
                                <Form onSubmit={handleSubmit} >
                                    <Flex>
                                        <Field type="text" name="name" placeholder='Name' />
                                        <ErrorMessage name="name" component="small" />

                                        <Field type="text" name="email" placeholder='Email Address' />
                                        <ErrorMessage name="email" component="small" />

                                        <Field type="password" name="password" placeholder='Password' />
                                        <ErrorMessage name="password" component="small" />

                                        <Field type="number" name="phone" placeholder='Phone Number' />
                                        <ErrorMessage name="phone" component="small" />

                                    </Flex>

                                    <Flex
                                        justifyCenter
                                        className='btn'
                                        type="submit"
                                        row
                                        disabled={isSubmitting}
                                    >
                                        <Button>SIGN UP</Button>
                                    </Flex>

                                </Form>
                            )}
                        </Formik>


                    </div>
                </Flex>
            </SignUpContainer >


        );
    }
}













