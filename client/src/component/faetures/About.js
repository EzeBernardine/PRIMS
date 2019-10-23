import React, { Component } from 'react';
import { AboutContainer } from '../styles/AboutStyles';
import { Button } from '../styles/ButtonStyles'


export default class History extends Component {
  render() {

    return (
      <AboutContainer>
        <div>
          <h2>CONTACT PSM TODAY</h2>
          <p>We would like to hear your view on related issues.</p>
          <div className='contact'>
            <input />
            <Button>SUBSCRIBE</Button>
          </div>
        </div>
      </AboutContainer>
    );
  }
}

















