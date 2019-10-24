
import img from '../image/prisonBackWall.png';

import styled, { css } from 'styled-components'

export const ProfileCounter = styled.div`
   height: 100vh;
    background-color:  #eae9e8;

    > div:first-child {
        background: #ff5000;
        a , h1{
            color: white
        }
    }
    
 > .profileDiv {

    position: relative;
    top: 82px;
    display: flex;
    grid-gap: 5%;
    /* background: #eae9e8; */

    > aside {
        width: 25%;
        background: white;
        > div {
            width: 70%;
            margin: 50px auto;
            color: #4f4f4f;

            > h2 {
                font-size: 20px;
            }
            >ul {
                padding: 0;
                margin: 0;
                
                > li {
                    list-style: none;
                    font-size: 14px;
                    margin: 10px 0;
                    display: flex;
                    align-items: center;
                    :hover {
                        background: #eae9e8;
                    }
                    > a {
                        padding: 10px 15px;
                        color: #707070;
                        text-decoration: none;
                    }
                    > svg {
                        font-size: 20px;
                    }
                    > span {
                        margin-left: 10px
                    }
                }
            }
        }
    }
    > .profileAside {
        width: 70%;
        background: white;
        display: flex;
        grid-gap: 50px;
        color: #707070;
        margin: 50px;
        padding: 50px;
        position: relative;

      
        > aside {
            > div{
                img {
                    width: 200px;
                }
            }
            > h3 {
                margin: 15px 0;
                font-size: 16px;
            }
            > ul {
                margin: 0;
                padding: 0;
                > li {
                    list-style: none;
                    font-size: 12px;
                    margin: 10px 0
                }
            }
        }



        > .profileRecords {

            > h1 {
                font-size: 16px
            }
            > div {
                font-size: 12px;

                > p {
                    line-height: 2em;
                    display: flex;
                    justify-content: space-between;
                    grid-gap: 50px;
                }
            }
        }

        > .btn {
            position: absolute;
            bottom: 50px;
            right: 50px     
        }
    }
 }
  
`