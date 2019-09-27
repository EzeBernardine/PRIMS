

import styled, { css } from 'styled-components'

import img from '../image/orangeBackground.jpg';

export const AllprisonerMain = styled.div`
  
    background-color: #221c18;
    height:  85vh;
    > div:first-child{
        background:  #ff5000;
        h1, a {
        color: white;
        }
    }
    .prisonBakImg  {
        position:   fixed;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-position: cover;
        background-size:   cover;
        background-blend-mode: overlay;
        height: 100vh;
        width: 100vw;
        z-index: .01;

    background-color: #fff5ee;
    }
    .prisonersDiv {
        position: relative;
        top: 82px;
       > section {
            width: 80%;
            margin: 50px auto;
            > h1 {
                color: #4f4f4f
            }
            > div{
            display: flex;
            flex-wrap: wrap;
            grid-gap: 30px;
            justify-content: space-between;;
    
            }
       }
    }
`
// orangeBackground.jpg