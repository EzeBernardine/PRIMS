import React, { Component } from 'react';
import { StyledCounter, LandingView, Section, Flex } from '../styles/LandingStyles';
import Menu from '../features/Menu';
import Footer from '../features/Footer';
import History from '../features/About'



export default class Landing extends Component {



  render() {
    let menus = [
      {
        name: 'PRISONSERS',
        to: '/allprisoners'
      },
      {
        name: 'PRISONS',
        to: '/prisons'
      },
      {
        name: 'LOG IN',
        to: '/login'
      },
    ]
    return (
      <StyledCounter >
        <Menu menus={menus} />

        <LandingView >
          <aside>
            <h1>NIGERIAN PRISONERS</h1>
            <p>A Prison Management System for prisoners in Ngeria</p>
          </aside>
        </LandingView>

        <Section>
          <Flex className='text'>
            <div>
              <h1>WHAT IS PMS</h1>
              <p>Prison management. Prisons, essential to the criminal justice system, have a formal organization and specific functions to perform. The main objective of the Prison Management System (PMS) is not just to confine inmates and prevent them from committing crimes, but to reform and rehabilitate..</p>
            </div>
          </Flex>

          <Flex justifyCenter className='imgContainer'>
            <img src={require('../image/psmSecure.jpg')} />
          </Flex>

        </Section>

        <Section>
          <Flex justifyCenter className='imgContainer'>
            <img src={require('../image/whatwedo2.png')} />
          </Flex>

          <Flex className='text'>
            <div>
              <h1>WHAT WE DO</h1>
              <p>This system is named as Prison management system. This system is made to keep the records about the prisoners and about the guards. It provides each inmate a possible rehab system so as to curb further curruption in the country.</p>
            </div>
          </Flex>
        </Section>


        <Section  >
          <Flex className='techEnvMain' column>
            <p className='techEnvPara'>OUR TRIPPLE STAND</p>
            <Flex className='techContainer' gap>
              <Flex className='techEnv' alignCenter>
                <Flex justifyCenter className='techEnvImg'>
                  <img src={require('../image/management.png')} />
                </Flex>
                <h2>MANAGEMENT</h2>
                <p>Kee prison inmates in check, and manage its day to day activities</p>
              </Flex>

              <Flex className='techEnv' alignCenter>
                <Flex justifyCenter className='techEnvImg'>
                  <img src={require('../image/tracking.png')} />
                </Flex>
                <h2>KEEPING TRACK</h2>
                <p>Ensure all prison records are kept save for fure use</p>
              </Flex>

              <Flex className='techEnv' alignCenter>
                <Flex justifyCenter className='techEnvImg'>
                  <img src={require('../image/rehabilitation.png')} />
                </Flex>
                <h2>REHABLITATE</h2>
                <p>Assist each inmate towards becoming better citizens by providing possible rehab system</p>
              </Flex>
            </Flex>
            <p className='techBigPara'>Prison management systems help maintain the records of prisoners and the various cases registered against them. These solutions capture the details of inmates along with biometric details such as photographs, facial expressions, thumb impressions, and others. Nowadays, companies are offering prison management systems with advanced modules such as demographic data capture, scheduling, reporting, workflow control, case management, and medical facility management.</p>
          </Flex>
        </Section>


        <History />
        <Footer thipassedHistory={this.props.history}/>
      </StyledCounter>
    );
  }
}

















