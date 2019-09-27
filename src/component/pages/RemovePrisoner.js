import React, { Component } from 'react';
import { SignUpContainer, Flex } from '../styles/AddPrisonerStyles';
import { Button } from '../styles/ButtonStyles';
import { NavLink } from 'react-router-dom'

export default class RemovePrisoner extends Component {

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
          <NavLink to='/addprisoner'> Add </NavLink>

        </aside>
        <Flex>
          <div>

            <h1>Remove Prisoner</h1>

            <form>
              <Flex>
                <label>Name</label>
                <input />
              </Flex>

              <Flex>
                <label>Email Address</label>
                <input />
              </Flex>


              <Flex justifyCenter row>
                <Button >Remove</Button>
              </Flex>
            </form>

          </div>
        </Flex>
      </SignUpContainer >


    );
  }
}

















