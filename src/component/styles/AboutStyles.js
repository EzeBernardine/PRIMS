

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

    > div {
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        color: white;
        width: 40%;
        border-top: 3px dotted #ff5000;
        border-bottom: 3px dotted   #ff5000;

        > p {
            /* text-align: center */
        }
    }
`