import React, { Component } from 'react';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Button } from '../styles/ButtonStyles';
import { NavLink } from 'react-router-dom';
import { Mutation } from 'react-apollo'
import { ADD_PRISONER, ALL_PRISONERS } from './queries'

import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { ShowMessage, type } from "../../../../components/Toaster/ShowMessage";
// import {ShowMessage, type} from "../Toaster/ShowMessage"
let yup = require('yup');


const prisoners = []
export default class AddPrisoner extends Component {


  totalDuration = (startTime, endTime, startDate, endDate) => {
    return (Date.parse(`${endDate}` + ' ' + `${endTime}`) - Date.parse(`${startDate}` + ' ' + `${startTime}`)) / 60000
  }

  getAge = (age) => {
    return Math.round((Date.parse(`${new Date()}`) - Date.parse(`${age}`)) * 3.171e-11)
  }

  checkNewPrisoner = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    let { name, email, timeImprisoned, timeReleased, dateImprisoned, dateReleased, gender, age, state, lga, story, image } = values
    let duration = this.totalDuration(timeImprisoned, timeReleased, dateImprisoned, dateReleased)
    let currentAge = this.getAge(age)

    // reseting the add prisoner form
    resetForm()


    // pushing all prison records into an empty array
    prisoners.push({ name, email, state, timeImprisoned, timeReleased, dateImprisoned, dateReleased, gender, currentAge, state, lga, story, image, duration })

    // storing data to local storage
    localStorage.setItem('prisoners', JSON.stringify(prisoners))

    console.log(JSON.parse(localStorage.getItem('prisoners')))
  }


  render() {
    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email(),
      dateImprisoned: yup.string().required(),
      dateReleased: yup.string().required(),
      timeImprisoned: yup.string().required(),
      timeReleased: yup.string().required(),
      state: yup.string().required(),
      lga: yup.string().required(),
      gender: yup.string().required(),
      age: yup.string().required(),
      story: yup
        .string()
        .label('story')
        .required()
        .min(100, 'Seems a bit short...')
        .max(500, 'We prefer moderate analysis, try shorten it.'),
      prisonunit: yup.string().required(),
      image: yup.mixed().required('A file is required')
    });
    return (
      < SignUpContainer >
        <aside>
          <NavLink to='/profile'> BACK </NavLink>
          <NavLink to='/addStaff'>+ STAFF </NavLink>
          <NavLink to='/addPrisons'> + PRISON </NavLink>
          <NavLink to='/'> HOME </NavLink>

        </aside>
        <Flex>
          <div>
            <h1>ADD PRISONER</h1>
            <Mutation mutation={ADD_PRISONER} refetchQueries={() => [{ query: ALL_PRISONERS }]} awaitRefetchQueries={true}>
              {(addPrisoner) => (
                <Formik
                  initialValues={{ name: '', nationality: '', email: '', timeImprisoned: '', timeReleased: '', dateImprisoned: '', dateReleased: '', gender: '', age: '', state: '', lga: '', story: '', prisonunit: '', image: '' }}
                  onSubmit={async ({ name,
                    email,
                    gender,
                    nationality,
                    state,
                    dateImprisoned,
                    dateReleased,
                    timeImprisoned,
                    timeReleased,
                    lga,
                    story,
                    prisonunit,
                    image }, { setSubmitting, resetForm }) => {
                    const data = {
                      name,
                      email,
                      gender,
                      nationality,
                      state,
                      dateImprisoned,
                      dateReleased,
                      timeImprisoned,
                      timeReleased,
                      lga,
                      story,
                      prisonunit,
                      image: "image.jpg"
                    }
                    await addPrisoner({
                      variables: {
                        data
                      }
                    }).then((res) => {
                      this.props.history.push("/allprisoners")
                    }).catch(error => {
                      console.log(error)
                    })

                  }}
                // validationSchema={schema}
                >
                  {({ isSubmitting, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <Flex>
                        <Field type="text" name="name" placeholder='Name' />
                        <ErrorMessage name="name" component="small" />

                        <Field type="text" name="email" placeholder='Email Address' />
                        <ErrorMessage name="email" component="small" />

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

                        <label >State and LGA</label>

                        <Flex row className='time'>
                          <Flex>
                            <Field component="select" name="state">
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
                            <ErrorMessage name="state" component="small" />
                          </Flex>

                          <Flex>
                            <Field type="text" name="lga" placeholder='LGA' />
                            <ErrorMessage name="lga" component="small" />
                          </Flex>
                        </Flex>


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


                        <Field type="text" name="story" placeholder='Story' component='textarea' />
                        <ErrorMessage name="story" component="small" />

                        <Field type="text" name="prisonunit" placeholder='Prison Unit' />
                        <ErrorMessage name="prisonunit" component="small" />

                        <Field type="text" name="nationality" placeholder='nationality' />
                        <ErrorMessage name="nationality" component="small" />

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
                        {/* <Button  >ADD</Button> */}
                        <input type="submit" value="Add prisoner" />
                        {/* <button>Submit</button> */}
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













