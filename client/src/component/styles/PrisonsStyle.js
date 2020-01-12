

import styled, { css } from 'styled-components';

export const PrisonsMain = styled.div`
    > div:first-child{
        background:  #ff5000;
        h1, a {
            color: white;
        }
    }

    > section {
      position: relative;
      top: 82px;
      > aside {
        color: #707070;
        width: 80%;
        margin: 20px  auto;
        h1 {font-size: 20px;}
        p {font-size: 16px;}
      }
        > .prison {
          overflow: hidden;
          width: 80%;
          margin: 0 auto;
          padding: 50px 0;
          > div {
            position: relative;
            box-shadow: 0 4px 5px 0px #e1e1e1;
            flex-basis: 300px;
            min-width: 288px;
            > .prisonImg {
              width: 100%;
              position: relative;
                :hover {
                  .prisonDetail {
                    opacity: 1
                  }
                }
                > img {
                  width: 100%
                }
                > .prisonDetail {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background: #221c188c;
                  top: 0;
                  color: #fff;
                  padding: 0%;
                  opacity: 0;
                  overflow: hidden;
                  > div  {
                    position: relative;
                    z-index: 3;
                    > span {
                      font-size: 16px;
                      text-decoration: underline;
                      color: #c1c1c1
                    }
                    > small {
                      font-size: 14px
                    }
                  }
              }   
            }

            .full {
              position: absolute;
              top: 0;
              right: 0;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              color: #fff;
              font-size: 11px;
              background: green
            }

            > footer {
              padding: 10px;
              color: #707070;
              > div {
                font-size: 14px;
                grid-gap: 5px;
                > .name {
                  justify-content: space-between;
                  > span {font-weight: bold;}
                }
                > .prisonManager {
                   justify-content: space-between;
                   font-size: 10px;
                   > .mdname {
                      :hover  {
                        > div {
                          cursor: pointer;
                          display: flex;
                        }
                      }
                      > .mdImg {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        display: none;
                        z-index: 2;
                        height: 50%;
                        width: 50%;
                        img {
                          border-radius: 50%;
                          height: 70%;
                          width: auto;
                        }
                        > small {
                          color: #fff;
                          border-radius: 5px;
                          position: absolute;
                          z-index: 5;
                          bottom: 0;
                          font-size: 10px;
                          margin: auto;
                          background: #35312eeb;
                          padding: 2px 5px;
                        }
                      }
                  }
                       
                }
              }
            }
          
          }
        }

    }
`