import React, { Component } from 'react';
import { PrisonsMain } from '../styles/PrisonsStyle';
import { RehabMain } from '../styles/RehabCenterStyles';
import Menu from '../features/Menu';
import { Flex } from '../styles/LandingStyles';
import { Button } from '../styles/ButtonStyles';
import { IoIosAdd, IoMdClose } from "react-icons/io";
import Modal from '../features/Modal'


export default class RehabCenter extends Component {
  state = {
    addRehab: undefined,
    show: false
  }

  showModal = () => {
    console.log('this.state.show')
    console.log(this.state.show)
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  displayRehab = () => {
    this.setState({ show: true });
  }

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
    let rehab = JSON.parse(localStorage.getItem('rehab'))


    // prisonName, prisonManager, mdImage,  prisonState, prisonLGA, prisonDetail, prisonImage

    return (
      <PrisonsMain>
        <Menu menus={menus} />

        <section>
          <aside>
            <h1>ALL REHAB CENTERS</h1>
            <p>List of all Nigeria prisons</p>
          </aside>
          <Flex gap className='prison'>
            {
              prisons ? prisons.map((prison, index) => (

                <div key={index}>
                  <div className='prisonImg'>
                    <img src={require('../image/rehab.jpg')} />

                    <div className='prisonDetail'>
                      <Flex column>
                        <span>{prison.prisonDetail && ' More Details :'} </span>
                        <small>{prison.prisonDetail}</small>
                      </Flex>
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
                : <p>No Rehab Center</p>
            }
          </Flex>
        </section>

        <RehabMain>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <header>
              <h1>SELECT REHAB  CENTERS </h1>
              <span onClick={this.hideModal}>< IoMdClose /></span>
            </header>
            <div>
              {
                rehab ? rehab.map((rehab, index) => (
                  <Flex key={index}>
                    <div className='rehabImgs'>
                      <img src={require('../image/rehab.jpg')} />
                    </div>
                    <Flex className='rehabDetail' column>
                      <h1>{rehab.rehabCenterName}</h1>
                      <Flex alignCenter>
                        <div>
                          <p>
                            <small>State: </small>
                            <small>{rehab.rehabState}</small>
                          </p>
                          <p>
                            <small>LGA: </small>
                            <small>{rehab.rehabLGA}</small>
                          </p>
                        </div>
                        <Flex alignCenter className='accDecBtns'>
                          <Button SM RGreen> Accept</Button>
                          <Button SM > Decline</Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                ))
                  : 'No rehab Center'
              }
            </div>
          </Modal>


          <Button className='addBtn' onClick={this.displayRehab}>
            <IoIosAdd />
          </Button>
        </RehabMain>
      </PrisonsMain>
    );
  }
}

















