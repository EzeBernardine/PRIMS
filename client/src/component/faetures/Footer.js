import React, { Component } from 'react';
import { FooterContainer } from '../styles/FooterStyles';



export default class Footer extends Component {
  render() {

let socials = [
  {
    account: 'Facebook',
    url: 'jjdjejjbcjsjankw',
    // logo: ''
    color: 'blue'
  },
  {
    account: 'Watsapp',
    url: 'jjdjejjbcjsjankw',
    // logo: ''
    color: 'green'
  },
  {
    account: 'Instagram',
    url: 'jjdjejjbcjsjankw',
    // logo: ''
    color: 'red'
  },
]
    return (
      <FooterContainer >
        <div className='socials'>
          <p>&#64;PSM 2019</p>
        </div>
      </FooterContainer>
    );
  }
}

















