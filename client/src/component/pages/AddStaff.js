import React, { Component } from 'react';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Button } from '../styles/ButtonStyles';
import { NavLink } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
let yup = require('yup');


const staffs = []
export default class AddStaff extends Component {


  getAge = (age) => {
    return Math.round((Date.parse(`${new Date()}`) - Date.parse(`${age}`)) * 3.171e-11)
  }

  checkNewPrisoner = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    let { name, email, password, position, gender, age, nationality, state, lga, image } = values
    let currentAge = this.getAge(age)

    // reseting the add prisoner form
    resetForm()


    // pushing all prison records into an empty array
    staffs.push({ name, email, password, state, nationality, position, gender, currentAge, state, lga, image })

    // storing data to local storage
    localStorage.setItem('prisoners', JSON.stringify(staffs))

    console.log(JSON.parse(localStorage.getItem('staffs')))
  }


  render() {
    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email(),
      password: yup.string().email(),
      state: yup.string().required(),
      lga: yup.string().required(),
      gender: yup.string().required(),
      age: yup.string().required(),
      position: yup.string().required(),
      nationality: yup.string().required(),
      image: yup.mixed().required('A file is required')
    });
    return (
      < SignUpContainer >
        <aside>
          <NavLink to='/profile'> BACK </NavLink>
          <NavLink to='/addPrisoner'>+ PRISONER </NavLink>
          <NavLink to='/addPrisons'> + PRISON </NavLink>
          <NavLink to='/'> HOME </NavLink>

        </aside>
        <Flex>
          <div>

            <h1>ADD STAFF</h1>
            <Formik
              initialValues={{ name: '', email: '', password: '', nationality: '', gender: '', age: '', state: '', lga: '', story: '', position: '', image: '' }}
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

                    <Field type="password" name="password" placeholder="Staff's  Password" />
                    <ErrorMessage name="password" component="small" />

                    <label >Date of Birth and Gender</label>

                    <Flex row className='time'>
                      <Flex>
                        <Field type="date" name="age" placeholder='Date of birth' />
                        <ErrorMessage name="age" component="small" />
                      </Flex>
                      <Flex>
                        <Field component="select" name="gender">
                          <option value='Male'> Male </option>
                          <option value='Female'> Female </option>
                        </Field>
                        <ErrorMessage name="gender" component="small" />
                      </Flex>
                    </Flex>


                    <Field type="text" name="nationality" placeholder='Nationality' />
                    <ErrorMessage name="nationality" component="small" />

                    <Field type="text" name="lga" placeholder='LGA' />
                    <ErrorMessage name="lga" component="small" />

                    <Field type="text" name="position" placeholder='Position' />
                    <ErrorMessage name="position" component="small" />

                    <Flex className='secEle'>
                      <Field type="file" name="image" className="inputfile" />
                      <label type="file" >
                        Add an image
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
                    <Button  >ADD</Button>
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

















