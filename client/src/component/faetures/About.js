import React, { Component } from 'react';
import { AboutContainer } from '../styles/AboutStyles';
import { Button } from '../styles/ButtonStyles'
import {Flex} from '../styles/LandingStyles'

export default class History extends Component {
  render() {

    return (
      <AboutContainer>
        <div>
          <h2>CONTACT PSM TODAY</h2>
          <p>We would like to hear your view on related issues.</p>
          <footer>Send us a message via <small>07000000000</small></footer>
          {/* <Flex className='contact' justifyCenter>
            <input />
            <Button>SUBSCRIBE</Button>
          </Flex> */}
        </div>
      </AboutContainer>
    );
  }
}

















