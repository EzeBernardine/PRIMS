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
          <Flex gap>
            {
              prisons ? prisons.map((prison, index) => (

                <div key={index}>
                  <div>
                    <img src={require('../image/prison.jpg')} />
                    {/* <img src={prison.prisonImage} /> */}
                  </div>
                  {50 >= 50 && <Flex alignCenter justifyCenter className='full'>Full</Flex>
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
                    </Flex>
                  </footer>

                  <div className='prisonDetail'>
                    <p>
                      <span>{prison.prisonDetail && ' More Details :'} </span>
                      <p>{prison.prisonDetail}</p>
                    </p>
                    <p>
                      <span>{prison.prisonManager && 'Prison Manager'} </span>
                      <p>{prison.prisonManager}</p>
                    </p>
                    <p>
                      <span>{prison.prisonManagerPhone && 'Contact'} </span>
                      <p>{prison.prisonManagerPhone}</p>
                    </p>
                  </div>
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

















