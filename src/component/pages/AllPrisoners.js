import React, { Component } from 'react';
import { AllprisonerMain } from '../styles/AllPrisonersStyles';
import Menu from '../faetures/Menu';
import Prisoner from '../faetures/Prisoner'


export default class AllPrisoners extends Component {

  render() {
    let menus = [
      {
        name: 'Home',
        to: '/'
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


    let prisoners = [
      {
        name: 'hsdhsh grgaerarerager efio',
        age: 4654,
        dateImprisoned: '14 Jan 2015',
        dateReleased: ' 15 June  2015',
        rehabCenter: 'Smoke  is bad rehab institute',
        gender: 'Female',
        Nationality: 'Alminini',
        img: require('../image/4.jpg')
      },
      {
        name: 'hsdhshefio',
        age: 4654,
        dateImprisoned: '14 Jan 2015',
        dateReleased: ' 15 June  2015',
        rehabCenter: 'Smoke  is bad rehab institute',
        gender: 'Female',
        Nationality: 'Alminini',
        img: require('../image/4.jpg')
      },
      {
        name: 'hdfuhs rhfheuhgueriu rheurhi',
        age: 4654,
        dateImprisoned: '14 Jan 2015',
        dateReleased: ' 15 June  2015',
        rehabCenter: 'Smoke  is bad rehab institute',
        gender: 'Female',
        Nationality: 'Alminini',
        img: require('../image/4.jpg')
      },
      {
        name: 'hsdhshefio',
        age: 4654,
        dateImprisoned: '14 Jan 2015',
        dateReleased: ' 15 June  2015',
        rehabCenter: 'Smoke  is bad rehab institute',
        gender: 'Female',
        Nationality: 'Alminini',
        img: require('../image/5.jpg')
      },
    ]


    return (
      <AllprisonerMain>
        <Menu menus={menus} />
        
        <div className='prisonBakImg'></div>

        <div className='prisonersDiv'>
          <section>
            <h1>Imo State</h1>
            < Prisoner prisoners={prisoners}/>
          </section>

          <section>
            <h1>Abia State</h1>
            < Prisoner prisoners={prisoners}/>
          </section>

          <section>
            <h1>Anambra State</h1>
            < Prisoner prisoners={prisoners}/>
          </section>

          <section>
            <h1>Enugu State</h1>
            < Prisoner prisoners={prisoners}/>
          </section>
        </div>
      </AllprisonerMain>
    );
  }
}

















