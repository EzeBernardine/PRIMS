import React, { Component } from 'react';
import { PrisonsMain } from '../styles/PrisonsStyle';
import Menu from '../faetures/Menu';
import { Flex } from '../styles/LandingStyles';


export default class Prisons extends Component {



  render() {
    let menus = [
      {
        name: 'PRISONERS',
        to: '/allprisoners'
      },
      {
        name: 'PROFILE',
        to: '/profile'
      },
    ]
    let prisons = JSON.parse(localStorage.getItem('prisons'))


    // prisonName, prisonManager, mdImage,  prisonState, prisonLGA, prisonDetail, prisonImage

    return (
      <PrisonsMain>
        <Menu menus={menus} />

        <section>
          <h1>PRISONS</h1>
          <p>List of all Nigeria prisons</p>
          <Flex gap>
            {
              prisons ? prisons.map((prison, index) => (

                <div key={index}>
                  <div>
                    <img src={require('../image/prison.jpg')} />
                    {/* <img src={prison.prisonImage} /> */}
                  </div>

                  <footer className='eachPrison' key={index}>
                    <Flex className='' column>
                      <span>{prison.prisonName}</span>
                      <small>
                        <span>State: </span>
                        <span>{prison.prisonState} </span>
                      </small>
                      <small>
                        <span>LGA: </span>
                        <span> {prison.prisonLGA} </span>
                      </small>
                      <small>Occupants: 50</small>
                    </Flex>

                    <small>
                      <span>{prison.prisonDetail &&' More Details :'} </span>
                      <span>{prison.prisonDetail}</span>
                    </small>
                  </footer>
                </div>
              ))
                : <p>No Prison</p>
            }
          </Flex>
        </section>
      </PrisonsMain>
    );
  }
}

















