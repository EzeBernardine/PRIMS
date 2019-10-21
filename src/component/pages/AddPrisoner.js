import React, { Component } from 'react';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Button } from '../styles/ButtonStyles';
import { NavLink } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
let yup = require('yup');

export default class AddPrisoner extends Component {


  totalDuration = (startTime, endTime, startDate, endDate) => {
    return (Date.parse(`${endDate}` + ' ' + `${endTime}`) - Date.parse(`${startDate}` + ' ' + `${startTime}`)) / 60000
  }

  checkNewPrisoner = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    let { name, email, nationality, timeImprisoned, timeReleased, dateImprisoned, dateReleased, state, lga, story, image } = values
    let duration = this.totalDuration(timeImprisoned, timeReleased, dateImprisoned, dateReleased)


    // total duration in seconds of a prisoner
    console.log(duration + 'seconds')
    resetForm()
  }



  render() {
    let menus = [
      {
        name: 'HOME',
        to: '/'
      },
      {
        name: 'PRISONSERS',
        to: '/allprisoners'
      },
      {
        name: 'PRISONS',
        to: '/#'
      },
    ]

    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email(),
      nationality: yup.string().required(),
      dateImprisoned: yup.string().required(),
      dateReleased: yup.string().required(),
      timeImprisoned: yup.string().required(),
      timeReleased: yup.string().required(),
      state: yup.string().required(),
      lga: yup.string().required(),
      story: yup
        .string()
        .label('story')
        .required()
        .min(100, 'Seems a bit short...')
        .max(500, 'We prefer moderate analysis, try shorten it.'),
      image: yup.mixed().required('A file is required')
    });
    return (
      < SignUpContainer >
        <aside>
          <NavLink to='/profile'> Back </NavLink>
          <NavLink to='/'> Home </NavLink>

        </aside>
        <Flex>
          <div>

            <h1>Add Prisoner</h1>
            <Formik
              initialValues={{ name: '', email: '', nationality: '', timeImprisoned: '', timeReleased: '', dateImprisoned: '', dateReleased: '', state: '', lga: '', story: '', image: '' }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  this.checkNewPrisoner(values, resetForm)
                  setSubmitting(false);
                }, 400);
              }}
              validationSchema={schema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Flex>
                    <Field type="text" name="name" placeholder='Name' />
                    <ErrorMessage name="name" component="small" />

                    <Field type="text" name="email" placeholder='Email Address' />
                    <ErrorMessage name="email" component="small" />

                    <Field type="text" name="nationality" placeholder='Nationality' />
                    <ErrorMessage name="nationality" component="small" />

                    <label >Date and Time Imprisoned</label>

                    <Flex row className='time'>
                      <Flex>
                        <Field type="date" name="dateImprisoned" />
                        <ErrorMessage name="dateImprisoned" component="small" />
                      </Flex>
                      <Flex>
                        <Field type="time" name="timeImprisoned" />
                        <ErrorMessage name="timeImprisoned" component="small" />
                      </Flex>
                    </Flex>

                    <label >Date and Time To Be Released</label>

                    <Flex row className='time'>
                      <Flex>
                        <Field type="date" name="dateReleased" />
                        <ErrorMessage name="dateReleased" component="small" />
                      </Flex>
                      <Flex>
                        <Field type="time" name="timeReleased" />
                        <ErrorMessage name="timeReleased" component="small" />
                      </Flex>
                    </Flex>

                    <Field type="text" name="state" placeholder='State' />
                    <ErrorMessage name="state" component="small" />

                    <Field type="text" name="lga" placeholder='LGA' />
                    <ErrorMessage name="lga" component="small" />

                    <Field type="text" name="story" placeholder='Story' component='textarea' />
                    <ErrorMessage name="story" component="small" />

                    <Flex className='secEle'>
                      <Field type="file" name="image" className="inputfile" />
                      <label type="file" >
                        Choose an image
                        </label>
                      <ErrorMessage name="image" component="small" />
                    </Flex>
                  </Flex>

                  <Flex
                    justifyCenter
                    className='btn'
                    type="submit"
                    row
                    disabled={isSubmitting}
                  >
                    <Button  >Add</Button>
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

















