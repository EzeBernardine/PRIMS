import React, { Component } from 'react';
import { DetailContainer } from '../styles/PrisonerDetailStyles';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import Menu from '../faetures/Menu';
import { Button } from '../styles/ButtonStyles';
import { IoIosAdd } from "react-icons/io";

import { Formik, Form, Field, ErrorMessage } from 'formik';

let yup = require('yup');

let record = []
export default class PrisonerDetail extends Component {
  state = {
    addForm: true,
    newRecord: []
  }

  displayAddForm = () => {
    this.setState({ addForm: true })
  }

  checkNewRecord = (values) => {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    record.push({
      analysis: values.analysis.trim(),
      tags: [values.tag.trim()],
      date: date + ' ' + time
    })
    this.setState({
      newRecord: record,
      addForm: false
    })
    console.log(this.state.newRecord)
  }

  render() {


    let menus = [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Prisoners',
        to: '/allprisoners'
      },
      {
        name: 'Prisons',
        to: '/#'
      },
      {
        name: 'Profile',
        to: '/profile'
      },
    ]

    let details = {
      state: 'Enugu state',
      more: [
        {
          name: 'hsdhsh grgaerarerager efio',
          age: 4654,
          dateImprisoned: '14 Jan 2015',
          dateReleased: ' 15 June  2015',
          rehabCenter: 'Smoke  is bad rehab institute',
          gender: 'Female',
          Nationality: 'Alminini',
          img: require('../image/prisoner.jpg'),
          story: 'Master web and server development in our 8-Week FULLSTACK JS DEVELOPER course A subsidiary of the LearnFactory Internship curriculum, the BootCamp focuses on building Web, Mobile and Backend applications using the JavaScript and Node.js stack Master web and server development in our 8-Week FULLSTACK JS DEVELOPER course A subsidiary of the LearnFactory Internship curriculum, the BootCamp focuses on building Web, Mobile and Backend applications using the JavaScript and Node.js stack',
          tags: ['Stealing', 'killing', 'smoking']

        }
      ],
    }

    let { prisoners } = this.props



    let schema = yup.object().shape({
      tag: yup.string().required(),
      analysis: yup
        .string()
        .label('Analysis')
        .required()
        .min(100, 'Seems a bit short...')
        .max(500, 'We prefer moderate analysis, try shorten it.'),
    });
    return (
      <DetailContainer>

        <Menu menus={menus} />

        <section>
          <aside className='imgContainer'>
            <img src={details.more[0].img} />
          </aside>

          <aside className='credentials'>
            <p>
              <span className='subtitle'>Name:</span>
              <span>{details.more[0].name}</span>
            </p>
            <p>
              <span className='subtitle'>Age</span>
              <span>{details.more[0].age}</span>
            </p>
            <p>
              <span className='subtitle'>Gender</span>
              <span>{details.more[0].gender}</span>
            </p>
            <p>
              <span className='subtitle'>Nationality</span>
              <span>{details.more[0].Nationality}</span>
            </p>
            <p>
              <span className='subtitle'>State</span>
              <span>{details.state}</span>
            </p>
            <p>{details.more[0].story}</p>
            <p>
              <span className='subtitle'>Duration</span>
              <small className='date'>{details.more[0].dateImprisoned}</small> -
              <small className='date'>{details.more[0].dateReleased}</small>
            </p>
            <p>
              {
                details.more[0].tags.map((tag, index) => (
                  <small key={index} className='tag'>{tag}</small>
                ))
              }
            </p>
            <Button >DELETE RECORD</Button>
          </aside>
        </section>

        {
          this.state.addForm && (
            <SignUpContainer className='addRecord' >
              <Flex>
                <div>
                  <h1>ADD RECORD</h1>
                  <Formik
                    initialValues={{ analysis: '', tag: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        this.checkNewRecord(values)
                        setSubmitting(false);
                      }, 400);
                    }}

                    validationSchema={schema}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <Flex>
                          <Field type="text" name="analysis" placeholder='Analysis'
                            component="textarea" />
                          <ErrorMessage name="analysis" component="small" />
                          <Field type="text" name="tag" placeholder='Tags' />
                          <ErrorMessage name="tag" component="small" />
                        </Flex>

                        <Flex
                          justifyCenter
                          className='btn'
                          type="submit"
                          disabled={isSubmitting}
                        >
                          <Button dark >Add</Button>
                        </Flex>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Flex>
            </SignUpContainer>
          )
        }

        <Button className='addBtn' onClick={this.displayAddForm}>
          <IoIosAdd />
        </Button>



        <section className='records'>
          <h1>DAILY RECORDS</h1>
          <div>
            {
              this.state.newRecord.map((record, index) => (
                < div className='dailyRecord'>
                  <p>  <small className='date'>{record.date}</small>  </p>

                  <p>
                    <small className='subtitle'>Analysis :</small>
                    <small className='analysis'>{record.analysis}}</small>
                  </p>

                  <p className='tags'>
                    <small>
                      {
                        record.tags.map((tag, index) => (
                          <span className='tag'>{tag}</span>
                        ))
                      }
                    </small>
                  </p>
                </div>
              ))
            }
          </div>
        </section>
      </DetailContainer>
    );
  }
}

















