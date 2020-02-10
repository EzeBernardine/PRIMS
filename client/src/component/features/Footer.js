import React, { Component } from "react";
import { FooterContainer } from "../styles/FooterStyles";
import { Button } from "../styles/ButtonStyles";
import { SignUpContainer, Flex } from "../styles/AddPrisonerStyles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoMdClose } from "react-icons/io";
import { Query, Mutation } from "react-apollo";
import { ADD_REHAB } from "../pages/queries";
let yup = require("yup");

let rehab = [];
export default class Footer extends Component {
  state = {
    rehab: undefined
  };

  handleReahebForm = () => {
    this.setState({ rehab: true });
  };

  closeRehab = () => {
    this.setState({ rehab: false });
  };

  checkNewRehab = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    let tags = values.tag
      .split(" ")
      .join("")
      .split(",");
    let {
      rehabCenterName,
      rehabManager,
      mdImage,
      rehabState,
      rehabLGA,
      rehabDetail,
      rehabImage,
      rehabManagerPhone
    } = values;

    this.setState({ rehab: false });

    // pushing all prison records into an empty array
    rehab.push({
      rehabCenterName,
      rehabManager,
      mdImage,
      rehabState,
      rehabLGA,
      rehabDetail,
      rehabImage,
      rehabManagerPhone,
      tags
    });

    // storing data to local storage
    localStorage.setItem("rehab", JSON.stringify(rehab));

    console.log(JSON.parse(localStorage.getItem("rehab")));
    // reseting the add prisoner form
    resetForm();
  };

  render() {
    let schema = yup.object().shape({
      rehabCenter: yup.string().required(),
      rehabManager: yup.string().required(),
      rehabManagerPhone: yup.number().required("Phone number is required"),
      mdImage: yup.mixed().required("A file is required"),
      rehabState: yup.string().required(),
      rehabLGA: yup.string().required(),
      tag: yup.string().required(),
      rehabDetail: yup
        .string()
        .label("rehabDetail")
        .required()
        .min(10, "Seems a bit short...")
        .max(100, "We prefer moderate analysis, try shorten it."),
      rehabImage: yup.mixed().required("A file is required"),
      isAccepted: yup.boolean().required()
    });
    return (
      <FooterContainer>
        <Flex className="socials" column alignCenter>
          <p>&#64;PRISM 2019</p>
          <Flex alignCenter>
            <p>Register as a rebah center</p>
            <Button dark SM onClick={this.handleReahebForm}>
              REGISTER
            </Button>
          </Flex>
        </Flex>

        {this.state.rehab && (
          <SignUpContainer className="form">
            <div>
              <header>
                <h1> REGISTER AS A REHAB CENTER</h1>
                <span onClick={this.closeRehab}>
                  <IoMdClose />
                </span>
              </header>
              <div>
                <Mutation mutation={ADD_REHAB}>
                  {createRehab => (
                    <Formik
                      initialValues={{
                        rehabCenter : "",
                        rehabManager : "",
                        rehabManagerPhone : "",
                        mdImage : "",
                        rehabState : "",
                        rehabLGA : "",
                        tag : "",
                        rehabDetail : "",
                        rehabImage : "",
                        isAccepted: false
                      }}
                      onSubmit={async (
                        {
                          rehabCenter,
                          rehabManager,
                          rehabManagerPhone,
                          mdImage,
                          rehabState,
                          rehabLGA,
                          tag,
                          rehabDetail,
                          rehabImage,
                          isAccepted
                        },
                        { setSubmitting, resetForm }
                      ) => {
                        const data = {
                          rehabCenter,
                          rehabManager,
                          rehabManagerPhone,
                          mdImage,
                          rehabState,
                          rehabLGA,
                          tag,
                          rehabDetail,
                          rehabImage,
                          isAccepted
                        };
                        console.log(data);
                        await createRehab({
                          variables: {
                            data
                          }
                        })
                          .then(res => {
                            this.props.thipassedHistory.push({
                              pathname: "/rehab_dashboard",
                              state: {
                                response: data
                              }
                            });
                          })
                          .catch(error => {
                            console.log(error);
                          });
                      }}
                      validationSchema={schema}
                    >
                      {({ isSubmitting, handleSubmit}) => (
                        <Form onSubmit = {handleSubmit}>
                          <Flex>
                            <Field
                              type="text"
                              name="rehabCenter"
                              placeholder="Name Of Rehab Center"
                            />
                            <ErrorMessage
                              name="rehabCenter"
                              component="small"
                            />

                            <Field
                              type="text"
                              name="tag"
                              placeholder="Areas of administration. Seperate them with commas"
                              spellCheck="true"
                            />
                            <ErrorMessage name="tag" component="small" />

                            <Flex row className="time">
                              <Flex>
                                <Field
                                  type="text"
                                  name="rehabManager"
                                  placeholder="Manager'name"
                                />
                                <ErrorMessage
                                  name="rehabManager"
                                  component="small"
                                />
                              </Flex>
                              <Flex>
                                <Field
                                  type="text"
                                  name="rehabManagerPhone"
                                  placeholder="Manager's Cell"
                                />
                                <ErrorMessage
                                  name="rehabManagerPhone"
                                  component="small"
                                />
                              </Flex>
                              <Flex>
                                <Flex className="secEle">
                                  <Field
                                    type="file"
                                    name="mdImage"
                                    className="inputfile"
                                  />
                                  <label type="file"> MD's image </label>
                                  <ErrorMessage
                                    name="mdImage"
                                    component="small"
                                  />
                                </Flex>
                              </Flex>
                            </Flex>

                            <label>State and LGA of Rehab Center</label>

                            <Flex row className="time">
                              <Flex>
                                <Field component="select" name="rehabState">
                                  <option value="Abia"> Abia </option>
                                  <option value="Adamawa"> Adamawa </option>
                                  <option value="Akwa Ibom"> Akwa Ibom </option>
                                  <option value="Anambra"> Anambra </option>
                                  <option value="Bauchi"> Bauchi </option>
                                  <option value="Bayelsa"> Bayelsa </option>
                                  <option value="Benue"> Benue </option>
                                  <option value="Borno"> Borno </option>
                                  <option value="Cross River">
                                    {" "}
                                    Cross River{" "}
                                  </option>
                                  <option value="Delta"> Delta </option>
                                  <option value="Ebonyi"> Ebonyi </option>
                                  <option value="Enugu"> Enugu </option>
                                  <option value="Edo"> Edo </option>
                                  <option value="Ekiti"> Ekiti </option>
                                  <option value="Gombe"> Gombe </option>
                                  <option value="Imo"> Imo </option>
                                  <option value="Jigawa"> Jigawa </option>
                                  <option value="Kaduna"> Kaduna </option>
                                  <option value="Kano"> Kano </option>
                                  <option value="Katsina"> Katsina </option>
                                  <option value="Kebbi"> Kebbi </option>
                                  <option value="Kogi"> Kogi </option>
                                  <option value="Kwara"> Kwara </option>
                                  <option value="Lagos"> Lagos </option>
                                  <option value="Nasarawa"> Nasarawa </option>
                                  <option value="Niger"> Niger </option>
                                  <option value="Ogun"> Ogun </option>
                                  <option value="Ondo"> Ondo </option>
                                  <option value="Osun"> Osun </option>
                                  <option value="Oyo"> Oyo </option>
                                  <option value="Plateau"> Plateau </option>
                                  <option value="Rivers"> Rivers </option>
                                  <option value="Sokoto"> Sokoto </option>
                                  <option value="Taraba"> Taraba </option>
                                  <option value="Yobe"> Yobe </option>
                                  <option value="Zamfara"> Zamfara </option>
                                </Field>
                                <ErrorMessage
                                  name="rehabState"
                                  component="small"
                                />
                              </Flex>

                              <Flex>
                                <Field
                                  type="text"
                                  name="rehabLGA"
                                  placeholder="LGA"
                                />
                                <ErrorMessage
                                  name="rehabLGA"
                                  component="small"
                                />
                              </Flex>
                            </Flex>

                            <Field
                              type="text"
                              name="rehabDetail"
                              placeholder="Further Detail (optional)"
                            />

                            <Flex className="secEle">
                              <Field
                                type="file"
                                name="rehabImage"
                                className="inputfile"
                              />
                              <label type="file"> Prison Image </label>
                              <ErrorMessage
                                name="rehabImage"
                                component="small"
                              />
                            </Flex>
                          </Flex>

                          <Flex
                            justifyCenter
                            className="btn"
                            type="submit"
                            row
                            disabled={isSubmitting}
                          >
                            <Button>SUBMIT</Button>
                          </Flex>
                        </Form>
                      )}
                    </Formik>
                  )}
                </Mutation>
              </div>
            </div>
          </SignUpContainer>
        )}
      </FooterContainer>
    );
  }
}
