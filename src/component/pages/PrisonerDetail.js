import React, { Component } from 'react';
import { DetailContainer } from '../styles/PrisonerDetailStyles';
import Menu from '../faetures/Menu';
import { Button } from '../styles/ButtonStyles'



export default class PrisonerDetail extends Component {

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
          img: require('../image/4.jpg'),
          story: 'Master web and server development in our 8-Week FULLSTACK JS DEVELOPER course A subsidiary of the LearnFactory Internship curriculum, the BootCamp focuses on building Web, Mobile and Backend applications using the JavaScript and Node.js stack Master web and server development in our 8-Week FULLSTACK JS DEVELOPER course A subsidiary of the LearnFactory Internship curriculum, the BootCamp focuses on building Web, Mobile and Backend applications using the JavaScript and Node.js stack',
          tags: ['Stealing', 'killing', 'smoking']

        }
      ],
    }

    let prisonersRecords = localStorage.getItem('prisonersRecords');
    console.log(prisonersRecords, 'record')
    let { prisoners } = this.props
    return (
      <DetailContainer>

        <Menu menus={menus} />

        <section>
          <aside className='imgContainer'>
            <img src={details.more[0].img} />
          </aside>

          <aside className='credentials'>
            <p>
              <span>NAME:</span>
              <span>{details.more[0].name}</span>
            </p>
            <p>
              <span>AGE</span>
              <span>{details.more[0].age}</span>
            </p>
            <p>
              <span>GENDER</span>
              <span>{details.more[0].gender}</span>
            </p>
            <p>
              <span>NATIONALITY</span>
              <span>{details.more[0].Nationality}</span>
            </p>
            <p>
              <span>STATE</span>
              <span>{details.state}</span>
            </p>
            <p>{details.more[0].story}</p>
            <p>
              <span>DURATION</span>
              <small>{details.more[0].dateImprisoned}</small> -
              <small>{details.more[0].dateReleased}</small>
            </p>
            <p>
              {
                details.more[0].tags.map((tag, index) => (
                  <small key={index}>{tag}</small>
                ))
              }
            </p>
            <Button>DELETE RECORD</Button>
          </aside>
        </section>

      </DetailContainer>
    );
  }
}

















