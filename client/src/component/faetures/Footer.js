import React, { Component } from 'react';
import { FooterContainer } from '../styles/FooterStyles';
import { Button } from '../styles/ButtonStyles';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoMdClose } from "react-icons/io";
let yup = require('yup');

let rehab = []
export default class Footer extends Component {
  state = {
    rehab: undefined
  }

  handleReahebForm = () => {
    this.setState({ rehab: true })
  }

  closeRehab = () => {
    this.setState({ rehab: false })
  }

  checkNewRehab = (values, resetForm) => {
    // new prisoner's record  to be saved in database
    console.log('hi')
    let { rehabCenterName, rehabeManager, mdImage, rehabState, rehabLGA, rehabDetail, rehabImage, rehabManagerPhone } = values


    this.setState({ rehab: false })

    // pushing all prison records into an empty array
    rehab.push({ rehabCenterName, rehabeManager, mdImage, rehabState, rehabLGA, rehabDetail, rehabImage, rehabManagerPhone })

    // storing data to local storage
    localStorage.setItem('rehab', JSON.stringify(rehab))

    console.log(JSON.parse(localStorage.getItem('rehab')))
    // reseting the add prisoner form
    resetForm()
  }

  render() {

    let schema = yup.object().shape({
      rehabCenterName: yup.string().required(),
      rehabeManager: yup.string().required(),
      rehabManagerPhone: yup.number().required('Phone number is required'),
      mdImage: yup.mixed().required('A file is required'),
      rehabState: yup.string().required(),
      rehabLGA: yup.string().required(),
      rehabDetail: yup
        .string()
        .label('rehabDetail')
        .required()
        .min(10, 'Seems a bit short...')
        .max(100, 'We prefer moderate analysis, try shorten it.'),
      rehabImage: yup.mixed().required('A file is required')
    });
    return (
      <FooterContainer >
        <Flex className='socials' column alignCenter>
          <p>&#64;PRISM 2019</p>
          <Flex alignCenter >
            <p>Register as a rebah center</p>
            <Button dark SM onClick={this.handleReahebForm}>REGISTER</Button>
          </Flex>
        </Flex>

        {
          this.state.rehab &&
          <SignUpContainer className='form'>
            <div>
              <div>
                <Formik
                  initialValues={{ rehabCenterName: '', rehabeManager: '', rehabManagerPhone: '', mdImage: '', rehabState: '', rehabLGA: '', rehabDetail: '', rehabImage: '' }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                      this.checkNewRehab(values, resetForm)
                      setSubmitting(false);
                    }, 400);
                  }}
                  validationSchema={schema}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Flex>
                        <Field type="text" name="rehabCenterName" placeholder='Name Of Rehab Center' />
                        <ErrorMessage name="rehabCenterName" component="small" />

                        <Flex row className='time'>
                          <Flex>
                            <Field type="text" name="rehabeManager" placeholder='Manager' />
                            <ErrorMessage name="rehabeManager" component="small" />
                          </Flex>
                          <Flex>
                            <Field type="number" name="rehabManagerPhone" placeholder="Manager's Cell" />
                            <ErrorMessage name="rehabManagerPhone" component="small" />
                          </Flex>
                          <Flex>
                            <Flex className='secEle'>
                              <Field type="file" name="mdImage" className="inputfile" />
                              <label type="file"> MD's image </label>
                              <ErrorMessage name="mdImage" component="small" />
                            </Flex>
                          </Flex>
                        </Flex>


                        <label >State and LGA of Rehab Center</label>

                        <Flex row className='time'>
                          <Flex>
                            <Field component="select" name="rehabState">
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
                            <ErrorMessage name="rehabState" component="small" />
                          </Flex>

                          <Flex>
                            <Field type="text" name="rehabLGA" placeholder='LGA' />
                            <ErrorMessage name="rehabLGA" component="small" />
                          </Flex>
                        </Flex>

                        <Field type="text" name="rehabDetail" placeholder='Further Detail (optional)' />

                        <Flex className='secEle'>
                          <Field type="file" name="rehabImage" className="inputfile" />
                          <label type="file" > Prison Image </label>
                          <ErrorMessage name="rehabImage" component="small" />
                        </Flex>
                      </Flex>

                      <Flex
                        justifyCenter
                        className='btn'
                        type="submit"
                        row
                        disabled={isSubmitting}
                      >
                        <Button>SUBMIT</Button>
                      </Flex>

                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </SignUpContainer>
        }
      </FooterContainer>
    );
  }
}

















