import React, { Component } from 'react';
import { AllprisonerMain } from '../styles/AllPrisonersStyles';
import Menu from '../faetures/Menu';
import { Query } from 'react-apollo';
import { ALL_PRISONERS } from './queries';
import { Link } from 'react-router-dom'

export default class AllPrisoners extends Component {


  prisonerDetail = (e) => {
    this.props.history.push({ pathname: '/prisonerdetail' })
  }


  render() {
    let menus = [
      {
        name: 'PRISONS',
        to: '/prisons'
      },
      {
        name: 'PROFILE',
        to: '/profile'
      },
    ]


    // let prisoners = JSON.parse(localStorage.getItem('prisoners'))



    return (
      <Query query={ALL_PRISONERS}>
        {
          ({ loading, data }) => {
            if (loading) {
              return <div>Loading....</div>
            }
            console.log(data)
            return (
              <AllprisonerMain>
                <Menu menus={menus} />

                <div className='prisonBakImg'></div>

                <div className='prisonersDiv'>
                  {
                    data.prisoners.length !== 0 ? (data.prisoners.map((prisoner, index) => (

                      <section key={index}>
                        <h1>{prisoner.state}</h1>
                        <div className='prisonersContainer'>
                        <Link to={
                          {
                            pathname: '/prisonerdetail',
                            state: {
                              prisonerId: prisoner.id
                            }
                          }
                        } >

                            <div className='eachPrisoner' onClick={this.prisonerDetail} key={index}>
                              <div className='prisonerImgDiv'>
                                <img src={prisoner.image}></img>+
                              </div>
                              <div className='personalDetail'>
                                <p>
                                  <span>Name: </span>
                                  <span>{prisoner.name}</span>
                                </p>
                                <p>
                                  <span>Nationality: </span>
                                  <span >{prisoner.nationality} </span>
                                </p>
                                <p>
                                  <span>Gender: </span>
                                  <span >{prisoner.gender} </span>
                                </p>
                                <p className='duration'>
                                  <small>{prisoner.dateImprisoned} _{prisoner.dateReleased } </small>
                                </p>
                                <p className='duration'>
                                  <span>Time: </span>
                                  <small>{prisoner.timeReleased} </small>
                                </p>
                              </div>
                            </div>
                        </Link>
                          </div>
                      </section>
                    )))
                      : (<p style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '28px'
                      }}>No Prisoners Available</p>)
                  }

                </div>
              </AllprisonerMain>
            )

          }
        }
      </Query>
    );
  }
}

















