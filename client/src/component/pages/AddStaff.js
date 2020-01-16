import React, { Component } from "react";
import { SignUpContainer, Flex } from "../styles/AddPrisonerStyles";
import { Button } from "../styles/ButtonStyles";
import { NavLink } from "react-router-dom";
import { Mutation } from "react-apollo";
import { ADD_STAFF } from "./queries";

import { Formik, Form, Field, ErrorMessage } from "formik";
let yup = require("yup");

const staffs = [];
export default class AddStaff extends Component {
  getAge = age => {
    return Math.round(
      (Date.parse(`${new Date()}`) - Date.parse(`${age}`)) * 3.171e-11
    );
  };

  checkNewPrisoner = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    let {
      name,
      email,
      position,
      gender,
      age,
      nationality,
      lga,
      image
    } = values;
    let currentAge = this.getAge(age);

    // reseting the add prisoner form
    resetForm();

    // pushing all prison records into an empty array
    staffs.push({
      name,
      email,
      position,
      gender,
      age,
      nationality,
      lga,
      image
    });

    // storing data to local storage
    localStorage.setItem("prisoners", JSON.stringify(staffs));

    console.log(JSON.parse(localStorage.getItem("staffs")));
  };

  render() {
    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      gender: yup.string().required(),
      date: yup.string().required(),
      nationality: yup.string().required(),
      lga: yup.string().required(),
      position: yup.string().required(),
      image: yup.string().required("A file is required")
    });
    return (
      <SignUpContainer>
        <aside>
          <NavLink to="/profile"> BACK </NavLink>
          <NavLink to="/addPrisoner">+ PRISONER </NavLink>
          <NavLink to="/addPrisons"> + PRISON </NavLink>
          <NavLink to="/"> HOME </NavLink>
        </aside>
        <Flex>
          <div>
            <h1>ADD STAFF</h1>
            <Mutation mutation={ADD_STAFF}>
              {(addStaff) => (
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    gender: "",
                    date: "",
                    nationality: "",
                    lga: "",
                    position: "",
                    image: ""
                  }}
                  onSubmit={async ({name,
                    email,
                    gender,
                    date,
                    nationality,
                    lga,
                    position,
                    image }, { setSubmitting, resetForm }) => {
                    const data = {
                      name,
                      email,
                      gender,
                      date,
                      nationality,
                      lga,
                      position,
                      image: "image.jpg"
                    }
                    console.log(data)
                    await addStaff({
                      variables: {
                        data
                      }
                    }).then((res) => {
                      console.log("res===>", res)
                      this.props.history.push("/profile")
                    }).catch(error => {
                      console.log(error)
                    })

                  }}
                  validationSchema={schema}
                >
                  {({ isSubmitting, handleSubmit, error }) => (
                    <Form onSubmit={handleSubmit}>
                      <Flex>
                        <Field type="text" name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="small" />
                        {console.log(error)}
                        <Field
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />
                        <ErrorMessage name="email" component="small" />


                        <label>Date of Birth and Gender</label>
                        <Flex row className="time">
                          <Flex>
                            <Field
                              type="date"
                              name="date"
                              placeholder="Date of birth"
                            />
                            <ErrorMessage name="date" component="small" />
                          </Flex>
                          <Flex>
                            <Field component="select" name="gender">
                              <option value="Male"> Male </option>
                              <option value="Female"> Female </option>
                            </Field>
                            <ErrorMessage name="gender" component="small" />
                          </Flex>
                        </Flex>

                        <Field
                          type="text"
                          name="nationality"
                          placeholder="Nationality"
                        />
                        <ErrorMessage name="nationality" component="small" />

                        <Field type="text" name="lga" placeholder="LGA" />
                        <ErrorMessage name="lga" component="small" />

                        <Field
                          type="text"
                          name="position"
                          placeholder="Position"
                        />
                        <ErrorMessage name="position" component="small" />

                        <Flex className="secEle">
                          <Field
                            type="file"
                            name="image"
                            className="inputfile"
                          />
                          <label type="file">Add an image</label>
                          <ErrorMessage name="image" component="small" />
                        </Flex>
                      </Flex>

                      <Flex
                        justifyCenter
                        className="btn"
                        type="submit"
                        row
                        disabled={isSubmitting}
                      >
                        <Button type="submit">ADD</Button>
                      </Flex>
                    </Form>
                  )}
                </Formik>
              )}
            </Mutation>
          </div>
        </Flex>
      </SignUpContainer>
    );
  }
}
