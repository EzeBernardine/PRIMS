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
          <aside>
            <h1>ALL PRISONS</h1>
            <p>List of all Nigeria prisons</p>
          </aside>
          <Flex gap className='prison'>
            {
              prisons ? prisons.map((prison, index) => (

                <div key={index}>
                  <div className='prisonImg'>
                    <img src={require('../image/prison.jpg')} />

                    <div className='prisonDetail'>
                      <p>
                        <span>{prison.prisonDetail && ' More Details :'} </span>
                        <p>{prison.prisonDetail}</p>
                      </p>
                    </div>
                  </div>


                  {
                    50 >= 50 && <Flex alignCenter justifyCenter className='full'>Full</Flex>
                  }

                  <footer className='eachPrison' key={index}>
                    <Flex className='' column>
                      <Flex alignCenter className='name'>
                        <span>{prison.prisonName}</span>
                        <small>50</small>
                      </Flex>
                      <small>
                        <span>State: </span>
                        <span>{prison.prisonState} </span>
                      </small>
                      <small>
                        <span>LGA: </span>
                        <span> {prison.prisonLGA} </span>
                      </small>
                      <Flex className='prisonManager' alignCenter>
                        <span>Prison Manager: </span>
                        <div className='mdname'> 
                          {prison.prisonManager}
                          <Flex className='mdImg' alignCenter justifyCenter>
                            <img src={require('../image/6.jpeg')} />
                            <small>{prison.prisonManagerPhone}</small>
                          </Flex>
                        </div>

                      </Flex>
                    </Flex>
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

















