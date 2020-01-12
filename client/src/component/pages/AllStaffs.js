import React, { Component } from 'react';
import { PrisonsMain } from '../styles/PrisonsStyle';
import Menu from '../features/Menu';
import { Flex } from '../styles/LandingStyles';


export default class AllStaffs extends Component {



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


    return (
      <PrisonsMain>
        <Menu menus={menus} />

        <section>
          <aside>
            <h1>ALL STAFFS</h1>
            <p>List of all registered staffs </p>
          </aside>
          <Flex gap className='prison'>
            {
              prisons ? prisons.map((prison, index) => (

                <div key={index}>
                  <div className='prisonImg'>
                    <img src={require('../image/staff.jpg')} />

                    <div className='prisonDetail'>
                      <Flex column>
                        <span>  Address : </span>
                        <small>Address</small>
                      </Flex>
                      <Flex column style={{marginTop: '10px'}}>
                        <span>  Local Govt ARea : </span>
                        <small>lga</small>
                      </Flex>
                    </div>
                  </div>


                  <footer className='eachPrison' key={index}>
                    <Flex className='' column>
                      <Flex alignCenter className='name'>
                        <span>Name</span>
                        <small>date of birth</small>
                      </Flex>
                      <small>
                        <span>State: </span>
                        <span>{prison.prisonState} </span>
                      </small>
                      <Flex className='prisonManager' alignCenter>
                        <span>Position </span>
                       
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

















