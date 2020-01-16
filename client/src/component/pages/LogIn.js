import React, { Component } from "react";
import { SignUpContainer, Flex } from "../styles/AddPrisonerStyles";
import { Button } from "../styles/ButtonStyles";
import { NavLink } from "react-router-dom";
import { Mutation } from "react-apollo";
import { LOGIN } from "./queries";
import { Formik, Form, Field, ErrorMessage } from "formik";
let yup = require("yup");

export default class LogIn extends Component {
  chechLoginDetails = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    let { name, password } = values;
  };

  render() {
    let schema = yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup.string().required()
    });
    return (
      <SignUpContainer style={{ margin: "0 auto" }}>
        u
        <Flex style={{ height: "100vh", margin: "0 auto" }}>
          <div>
            <header>
              <h1>LOG IN</h1>
              <p>
                You can login only if you are an admin, a registered staff or a
                rehab center.
              </p>
            </header>
            <Mutation mutation={LOGIN}>
              {(login, {loading}) => (
                <Formik
                  initialValues={{ email: "ben@gmail.com", password: "12345" }}
                  onSubmit={values => {
                    login({
                      variables: {
                        email: values.email,
                        password: values.password
                      }
                    })
                      .then( async res => {
                        const loginToken = res.data.login
                        await localStorage.setItem('token', loginToken.token)
                        this.props.history.push("/profile");
                      })
                      .catch(err => {
                        console.log(err);
                      });
                  }}
                  validationSchema={schema}
                >
                  {({ isSubmitting, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <Flex>
                        <Field
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />
                        <ErrorMessage name="email" component="small" />
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <ErrorMessage name="password" component="small" />
                      </Flex>

                      <Flex
                        justifyCenter
                        className="btn"
                        type="submit"
                        row
                        disabled={isSubmitting}
                      >
                        <Button>LOG IN</Button>
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
