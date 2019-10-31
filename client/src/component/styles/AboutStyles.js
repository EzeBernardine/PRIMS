

import bar from '../image/barPerson.jpg';

import styled , {css} from 'styled-components'

export const AboutContainer = styled.div`
  
  background-image: url(${bar});     
    background-repeat: no-repeat;
    background-position: cover;
    background-size:   cover;
    background-blend-mode: overlay;
    background-color: #221c18;
    height:  85vh;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 80px 0 0 0;
    @media(max-width: 800px ) {height: 60vh}

    > div {
        margin-left: 10%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        color: white;
        width: 40%;
        border-top: 3px dotted #ff5000;
        border-bottom: 3px dotted   #ff5000;
          @media(max-width: 800px ) {width: 80%; margin: 0 auto}
        > footer {
              font-size: 12px;
            > small {
              color: #ff5000;
              /* color: #ac5f3b */
            }
        }
      /* > .contact {
        border: 1px solid #ffff;
        border-radius: 5px;
        display: flex;
        align-items: stretch;
        > input {
          flex: 1 1 80%;
          background: transparent;
        border-radius: 5px;
        color: white;
        padding: 5px;
        border: none;
        }
        > button {
        border-radius: 5px;
          flex: 2 2 20%;
          border-radius: 0
        }
      } */
    }
`