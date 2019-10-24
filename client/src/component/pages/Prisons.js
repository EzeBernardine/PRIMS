import React, { Component } from 'react';
import { PrisonsMain } from '../styles/PrisonsStyle';
import Menu from '../faetures/Menu';


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


    return (
      <PrisonsMain>
        <Menu menus={menus} />

        <div>
          
        </div>

      </PrisonsMain>
    );
  }
}

















