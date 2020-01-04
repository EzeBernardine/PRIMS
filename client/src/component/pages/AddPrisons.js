import React, { Component } from 'react';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Button } from '../styles/ButtonStyles';
import { NavLink } from 'react-router-dom';
import {Mutation} from 'react-apollo';
import {ADD_PRISON} from './queries'

import { Formik, Form, Field, ErrorMessage } from 'formik';
let yup = require('yup');


const prisons = []
export default class AddPrisons extends Component {



  checkNewPrisoner = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    let { prisonName, prisonManager, mdImage, prisonState, prisonLGA, prisonDetail, prisonImage, prisonManagerPhone } = values

    
    
    // pushing all prison records into an empty array
    prisons.push({ prisonName, prisonManager, mdImage, prisonState, prisonLGA, prisonDetail, prisonImage, prisonManagerPhone })
    
    // storing data to local storage
    localStorage.setItem('prisons', JSON.stringify(prisons))
    
    // reseting the add prisoner form
    resetForm()
  }


  render() {
    let schema = yup.object().shape({
      prisonName: yup.string().required(),
      prisonManager: yup.string().required(),
      prisonManagerPhone: yup.string().required('Phone number is required'),
      mdImage: yup.mixed().required('A file is required'),
      prisonState: yup.string().required(),
      prisonLGA: yup.string().required(),
      prisonDetail: yup
        .string()
        .label('prisonDetail')
        .required()
        .min(10, 'Seems a bit short...')
        .max(100, 'We prefer moderate analysis, try shorten it.'),
      prisonImage: yup.mixed().required('A file is required')
    });
    return (
      < SignUpContainer >
        <aside>
          <NavLink to='/profile'> BACK </NavLink>
          <NavLink to='/addStaff'>+ STAFF </NavLink>
          <NavLink to='/addPrisoner'>+ PRISONER </NavLink>
          <NavLink to='/'> HOME </NavLink>

        </aside>
        <Flex>
          <div>

            <h1>ADD PRISON</h1>
            <Mutation mutation= {ADD_PRISON}>
              {(addPrison) => (
                <Formik
                initialValues={{ prisonName: '', prisonManager: '', prisonManagerPhone: '', mdImage: '', prisonState: '', prisonLGA: '', prisonDetail: '', prisonImage: '' }}
                onSubmit={async ({ prisonName,
                  prisonManager,
                  prisonManagerPhone,
                  mdImage,
                  prisonState,
                  prisonLGA,
                  prisonDetail,
                  prisonImage,
                   }, { setSubmitting, resetForm }) => {
                  const data = {
                    prisonName,
                    prisonManager,
                    prisonManagerPhone,
                    mdImage,
                    prisonState,
                    prisonLGA,
                    prisonDetail,
                    prisonImage
                  }
                  console.log(data)
                  await addPrison({
                    variables: {
                      data
                    }
                  }).then((res) => {
                    this.props.history.push("/")
                  }).catch(error => {
                    console.log(error)
                  })

                }}
                validationSchema={schema}
              >
                {({ isSubmitting, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Flex>
                      <Field type="text" name="prisonName" placeholder='Name Of Prison Unit' />
                      <ErrorMessage name="prisonName" component="small" />
  
                      <Flex row className='time'>
                        <Flex>
                          <Field type="text" name="prisonManager" placeholder='Prison Manager' />
                          <ErrorMessage name="prisonManager" component="small" />
                        </Flex>
                        <Flex>
                          <Field type="text" name="prisonManagerPhone" placeholder='Phone Number' />
                          <ErrorMessage name="prisonManagerPhone" component="small" />
                        </Flex>
                        <Flex>
                          <Flex className='secEle'>
                            <Field type="file" name="mdImage" className="inputfile" />
                            <label type="file"> MD's image </label>
                            <ErrorMessage name="mdImage" component="small" />
                          </Flex>
                        </Flex>
                      </Flex>
  
  
                      <label >State and LGA</label>
  
                      <Flex row className='time'>
                        <Flex>
                          <Field component="select" name="prisonState">
                            <option value='Abia'> Abia </option>
                            <option value='Adamawa'> Adamawa </option>
                            <option value='Akwa Ibom'> Akwa Ibom </option>
                            <option value='Anambra'> Anambra </option>
                            <option value='Bauchi'> Bauchi </option>
                            <option value='Bayelsa'> Bayelsa </option>
                            <option value='Benue'> Benue </option>
                            <option value='Borno'> Borno </option>
                            <option value='Cross River'> Cross River </option>
                            <option value='Delta'> Delta </option>
                            <option value='Ebonyi'> Ebonyi </option>
                            <option value='Enugu'> Enugu </option>
                            <option value='Edo'> Edo </option>
                            <option value='Ekiti'> Ekiti </option>
                            <option value='Gombe'> Gombe </option>
                            <option value='Imo'> Imo </option>
                            <option value='Jigawa'> Jigawa </option>
                            <option value='Kaduna'> Kaduna </option>
                            <option value='Kano'> Kano </option>
                            <option value='Katsina'> Katsina </option>
                            <option value='Kebbi'> Kebbi </option>
                            <option value='Kogi'> Kogi </option>
                            <option value='Kwara'> Kwara </option>
                            <option value='Lagos'> Lagos </option>
                            <option value='Nasarawa'> Nasarawa </option>
                            <option value='Niger'> Niger </option>
                            <option value='Ogun'> Ogun </option>
                            <option value='Ondo'> Ondo </option>
                            <option value='Osun'> Osun </option>
                            <option value='Oyo'> Oyo </option>
                            <option value='Plateau'> Plateau </option>
                            <option value='Rivers'> Rivers </option>
                            <option value='Sokoto'> Sokoto </option>
                            <option value='Taraba'> Taraba </option>
                            <option value='Yobe'> Yobe </option>
                            <option value='Zamfara'> Zamfara </option>
                          </Field>
                          <ErrorMessage name="prisonState" component="small" />
                        </Flex>
  
                        <Flex>
                          <Field type="text" name="prisonLGA" placeholder='LGA' />
                          <ErrorMessage name="prisonLGA" component="small" />
                        </Flex>
                      </Flex>
  
                      <Field type="text" name="prisonDetail" placeholder='Further Detail (optional)' />
  
                      <Flex className='secEle'>
                        <Field type="file" name="prisonImage" className="inputfile" />
                        <label type="file" > Prison Image </label>
                        <ErrorMessage name="prisonImage" component="small" />
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
              )}
            </Mutation>

          </div>
        </Flex>
      </SignUpContainer >


    );
  }
}

















