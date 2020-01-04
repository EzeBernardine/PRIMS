import React, { Component } from 'react';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Button } from '../styles/ButtonStyles';
import { NavLink } from 'react-router-dom';
import { Mutation } from 'react-apollo'
import { ADD_PRISONER, ALL_PRISONERS } from './queries';
import { Formik, Form, Field, ErrorMessage } from 'formik';
let yup = require('yup');


export default class LogIn extends Component {



  chechLoginDetails = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    let { name, password } = values;

  }


  render() {
    let schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });
    return (
      < SignUpContainer   style={{ margin: '0 auto'}}>
        <aside>
          <NavLink to='/'> BACK </NavLink>

        </aside>
        <Flex   style={{height: '100vh', margin: '0 auto'}}>
          <div>
            <header>
              <h1>LOG IN</h1>
              <p>You can login only if you are a registered staff or rehab center</p>
            </header>
            <Formik
          
              initialValues={{ name: '', password: '' }}
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
                    <Field type="text" name="email" placeholder='Email Address' />
                    <ErrorMessage name="email" component="small" />

                    <Field type="password" name="password" placeholder='Password' />
                    <ErrorMessage name="password" component="small" />
                  </Flex>

                  <Flex
                    justifyCenter
                    className='btn'
                    type="submit"
                    row
                    disabled={isSubmitting}
                  >
                    <Button>LOG IN</Button>
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













