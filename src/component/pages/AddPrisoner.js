import React, { Component } from 'react';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Button } from '../styles/ButtonStyles';
import { NavLink } from 'react-router-dom'

export default class AddPrisoner extends Component {

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
    ]

    return (
      < SignUpContainer >
        <aside>
          <NavLink to='/profile'> Back </NavLink>
          <NavLink to='/'> Home </NavLink>
          <NavLink to='/removeprisoner'> Remove </NavLink>

        </aside>
        <Flex>
          <div>

            <h1>Add Prisoner</h1>

            <form>
              <Flex>
                <label>Name</label>
                <input />
              </Flex>

              <Flex>
                <label>Email Address</label>
                <input />
              </Flex>

              <Flex>
                <label>Nationality</label>
                <input />
              </Flex>

              <Flex row>
                <Flex>
                  <label>Time Imprisoned</label>
                  <input />
                </Flex>
                <Flex>
                  <label>Time To  Be Released</label>
                  <input />
                </Flex>
              </Flex>

              <Flex row>
                <Flex>
                  <label>State</label>
                  <input />
                </Flex>
                <Flex>
                  <label>LGA</label>
                  <input />
                </Flex>
              </Flex>


              <Flex>
                <label>Story</label>
                <textarea />
              </Flex>

              <Flex justifyCenter row>
                <Button >Add</Button>
              </Flex>
            </form>

          </div>
        </Flex>
      </SignUpContainer >


    );
  }
}

















