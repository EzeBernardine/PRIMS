import React, { Component } from 'react';
import { PrisonerContainer } from '../styles/PrisonerStyles';



export default class Prisoner extends Component {

  render() {

    let { prisoners } = this.props
    return (
      <PrisonerContainer>
        {
          prisoners.map(prisoner => (
            <div>
              <div className='prisonerImgDiv'>
                <img src={prisoner.img}></img>
              </div>
              <div className='personalDetail'>
                <p>
                  <span>Name: </span>
                  <span>{prisoner.name}</span>
                </p>
                <p>
                  <span>Age: </span>
                  <span >{prisoner.age} </span>
                </p>
                <p>
                  <span>Gender: </span>
                  <span >{prisoner.gender} </span>
                </p>
                <p>
                  <span>Nationality: </span>
                  <span >{prisoner.Nationality} </span>
                </p>
                <p>
                  <span>Duration: </span>
                  <p >{prisoner.dateImprisoned} _{prisoner.dateReleased} </p>
                </p>
              </div>
            </div>
          ))
        }
      </PrisonerContainer>
    );
  }
}

















