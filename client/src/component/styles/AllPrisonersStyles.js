

import styled, { css } from 'styled-components'

import img from '../image/orangeBackground.jpg';

export const AllprisonerMain = styled.div`
   
    /* background-color: #221c18; */
    /* height:  85vh; */
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
        background-color: #fbfbfb;
    }
    .prisonersDiv {
        position: relative;
        p, h1, h2{margin: 0; padding: 0}
        p{line-height: 1.7em}
        top: 82px;
       > section {
            margin: 0 auto;
            > h1 {
                color: #4f4f4f;
                padding: 20px 10%;
                background: white;
            }
            > .prisonersContainer {
                display: flex;
                padding: 20px;
                flex-wrap: wrap;
                grid-gap: 30px;
                width: 80%;
                margin: auto;
                > .eachPrisoner{
                    display: flex;
                    flex-wrap: wrap;
                    width: 300px;
                    grid-gap: 5%;
                    padding: 5px;
                    background: white;
                    box-shadow: 0 4px 5px 0px #f4f1f1;
                    :hover {
                        box-shadow: 0 4px 5px 0px #e1e1e1;
                        cursor: pointer;
                    }
                    > .prisonerImgDiv {
                        width: 45%;
                        > img {width: 100%}
                    }
                    > .personalDetail {
                        width: 50%;
                        font-size: 11px;
                        > .duration {
                            color: red;
                            font-size: 10px;
                        }
                    }
                }
            }
       }
    }
`