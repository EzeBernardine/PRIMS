import React, { Component } from 'react';
import { DetailContainer } from '../styles/PrisonerDetailStyles';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import Menu from '../faetures/Menu';
import { Button } from '../styles/ButtonStyles';
import { IoIosAdd,IoMdClose } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaEdit } from "react-icons/fa";
const yup = require('yup');

let record = []    


export default class PrisonerDetail extends Component {
  state = {
    addForm: undefined, // This controls the addform display
    newRecord: [] //This hold all the daily record of a prisoner
  }


  displayAddForm = () => {
    this.setState({ addForm: true })
  }
  handleCloseForm = () => {
    this.setState({ addForm: false })
  }


  checkNewRecord = (values) => {
    // Getting current date and time for each new daily record
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // Pushing each new daily record into an empty array
    record.push({
      analysis: values.analysis.trim(),
      tags: values.tag.split(' ').join('').split(','),
      date: date + ' ' + time
    })
    // Settted the new array as a setstate for newRecords which is all the records of a user
    this.setState({
      newRecord: record,
      addForm: false
    })
    // console.log(this.getAllTags(this.state.newRecord))

   
  }


  getAllTags = (newRecord) => {
    let tags = []
    newRecord.map(record => {
      record.tags.map(tag => {
        tags.push(tag)
      })
    })
    // tags is the list aff all the tags put togethe
    return this.getHighestOccuringTag(tags)
  }


  getHighestOccuringTag = (tags) => {
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < tags.length; i++) {
      for (let j = i; j < tags.length; j++) {
        if (tags[i] == tags[j]) m++;
        if (mf < m) {
          mf = m;
          item = tags[i];
        }
      }
      m = 0;
    }
    // return the highest occuring tag
    return item + ' ' + mf + " times ";
  }

  render() {


    let menus = [
      {
        name: 'PRISONERS',
        to: '/allprisoners'
      },
      {
        name: 'PRISONS',
        to: '/prisons'
      },
      {
        name: 'PROFILE',
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
            <FaEdit />
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
            <Button red>DELETE RECORD</Button>
          </aside>
        </section>

        {
          this.state.addForm && (
            <SignUpContainer className='addRecord' >
              <Flex>
                <div>
                  <aside onClick={this.handleCloseForm}>< IoMdClose /></aside>
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
                            component="textarea" spellCheck="true" />
                          <ErrorMessage name="analysis" component="small" />
                          <Field type="text" name="tag" placeholder='Tags. Seperate them with commas' spellCheck="true" />
                          <ErrorMessage name="tag" component="small" />
                        </Flex>

                        <Flex
                          justifyCenter
                          className='btn'
                          type="submit"
                          disabled={isSubmitting}
                        >
                          <Button  >Add</Button>
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
                < div className='dailyRecord' key={index}>
                  <p>  <small className='date'>{record.date}</small>  </p>

                  <p>
                    <small className='subtitle'>Analysis :</small>
                    <small className='analysis'>{record.analysis}}</small>
                  </p>

                  <p className='tags'>
                    <small>
                      {
                        record.tags.map((tag, index) => (
                          <span className='tag' key={index}>{tag}</span>
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

















