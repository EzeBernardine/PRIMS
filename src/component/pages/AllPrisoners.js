import React, { Component } from 'react';
import { AllprisonerMain } from '../styles/AllPrisonersStyles';
import Menu from '../faetures/Menu';


let prisoners = [
  {
    state: 'Imo state',
    more: [
      {
        name: 'hsdhsh grgaerarerager efio',
        age: 4654,
        dateImprisoned: '14 Jan 2015',
        dateReleased: ' 15 June  2015',
        rehabCenter: 'Smoke  is bad rehab institute',
        gender: 'Female',
        Nationality: 'Alminini',
        img: require('../image/4.jpg')

      }
    ]
  },


  {
    state: 'Anambra state',
    more: [
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
        name: 'hsdhsh grgaera nbfhvbh dfydh yrerager efio',
        age: 4654,
        dateImprisoned: '14 Jan 2015',
        dateReleased: ' 15 June  2015',
        rehabCenter: 'Smoke  is bad rehab institute',
        gender: 'Female',
        Nationality: 'Alminini',
        img: require('../image/4.jpg')

      },
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
        name: 'hsdhsh grgaerarerager efio',
        age: 4654,
        dateImprisoned: '14 Jan 2015',
        dateReleased: ' 15 June  2015',
        rehabCenter: 'Smoke  is bad rehab institute',
        gender: 'Female',
        Nationality: 'Alminini',
        img: require('../image/4.jpg')

      },
    ]
  },


  {
    state: 'Abia state',
    more: [
      {
        name: 'hsdhsh grgaerarerager efio',
        age: 4654,
        dateImprisoned: '14 Jan 2015',
        dateReleased: ' 15 June  2015',
        rehabCenter: 'Smoke  is bad rehab institute',
        gender: 'Female',
        Nationality: 'Alminini',
        img: require('../image/4.jpg')

      }
    ]
  },


  {
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
        img: require('../image/4.jpg')

      }
    ]
  },



]
export default class AllPrisoners extends Component {
  prisonerDetail = (e) => {
    localStorage.setItem('prisonersRecords', prisoners)
    this.props.history.push({ pathname: '/prisonerdetail' })
  }
  render() {
    let menus = [
      {
        name: 'HOME',
        to: '/'
      },
      {
        name: 'PRISONS',
        to: '/#'
      },
      {
        name: 'PROFILE',
        to: '/profile'
      },
    ]


   


    return (
      <AllprisonerMain>
        <Menu menus={menus} />

        <div className='prisonBakImg'></div>

        <div className='prisonersDiv'>
          {
            prisoners.map((state, index) => (

              <section key={index}>
                <h1>{state.state}</h1>
                <div className='prisonersContainer'>

                  {
                    state.more.map((prisoner, index) => (
                      <div className='eachPrisoner' onClick={this.prisonerDetail} key={index}>
                        <div className='prisonerImgDiv'>
                          <img src={prisoner.img}></img>
                        </div>
                        <div className='personalDetail'>
                          <p>
                            <span>Name: </span>
                            <span>{prisoner.name}</span>
                          </p>
                          <p>
                            <span>Age: </span>
                            <span >{prisoner.age} </span>
                          </p>
                          <p>
                            <span>Gender: </span>
                            <span >{prisoner.gender} </span>
                          </p>
                          <p>
                            <span>State: </span>
                            <span >{prisoner.state} </span>
                          </p>
                          <p>
                            <span>Nationality: </span>
                            <span >{prisoner.Nationality} </span>
                          </p>
                          <p className='duration'>
                            <small>{prisoner.dateImprisoned} _{prisoner.dateReleased} </small>
                          </p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </section>
            ))
          }

        </div>
      </AllprisonerMain>
    );
  }
}

















