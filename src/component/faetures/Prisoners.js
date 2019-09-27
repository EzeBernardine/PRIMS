import React, { Component } from 'react';
import { PrisonersContainer } from '../styles/PrisonersStyles'



export default class Prisoners extends Component {
  render() {
    let prisoners = [
      {
        name: 'sdhhsh',
        dateReleased: '14th May 2019',
        dateImprisoned: '12 June 2014',
        age: 20,
        country: 'Brazil',
        State: 'Abia',
        img: require('../image/1.jpg')
      },
      {
        name: 'sdhhsh',
        dateReleased: '14th May 2019',
        dateImprisoned: '12 June 2014',
        age: 20,
        country: 'Brazil',
        State: 'Abia',
        img: require('../image/2.jpeg')
      },
      {
        name: 'sdhhsh',
        dateReleased: '14th May 2019',
        dateImprisoned: '12 June 2014',
        age: 20,
        country: 'Brazil',
        State: 'Abia',
        img: require('../image/3.jpeg')
      },
      {
        name: 'sdhhsh',
        dateReleased: '14th May 2019',
        dateImprisoned: '12 June 2014',
        age: 20,
        country: 'Brazil',
        State: 'Abia',
        img: require('../image/4.jpg')
      },
      {
        name: 'sdhhsh',
        dateReleased: '14th May 2019',
        dateImprisoned: '12 June 2014',
        age: 20,
        country: 'Brazil',
        State: 'Abia',
        img: require('../image/6.jpeg')
      },
      {
        name: 'sdhhsh',
        dateReleased: '14th May 2019',
        dateImprisoned: '12 June 2014',
        age: 20,
        country: 'Brazil',
        State: 'Abia',
        img: require('../image/6.jpeg')
      },
    ]

    return (
      <PrisonersContainer >
        <h1>Prisoners</h1>

        <section>
          {
            prisoners.map((prisoner, index) => (
              <div className='prisoner' key={index}>
                <div className='prisonerImg'>
                  <img src={prisoner.img} alt="Logo" />
                </div>
                <div className='data'>
                  <span>{prisoner.dateImprisoned}</span>
                  <span>__</span>
                  <span>{prisoner.dateReleased}</span>
                </div>
                <div className='prisonerCredebtials'>
                  <div>
                    <small className='prisonState'>State: </small>
                    <small className='prisonState'>{prisoner.State}</small>
                  </div>
                  <div>
                    <small className='prisonState'>Age: </small>
                    <small className='prisonAge'>{prisoner.age}</small>
                  </div>
                  <div>
                    <small className='prisonState'>Country : </small>
                    <small className='prisonState'>{prisoner.country}</small>
                  </div>
                </div>
              </div>
            ))
          }
        </section>
      </PrisonersContainer>
    );
  }
}

















