

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
        > div {
          overflow: hidden;
          width: 80%;
          margin: 0 auto;
          padding: 50px 0;
          > div {
            position: relative;
            box-shadow: 0 4px 5px 0px #e1e1e1;
            flex-basis: 300px;
            min-width: 288px;
            > div {
              width: 100%;
              > img {
                width: 100%
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
                  justify-content: space-between
                }
              }
            }
            > .prisonDetail {
              position: absolute;
              width: 90%;
              height: 90%;
              background: #221c188c;
              top: 0;
              color: #fff;
              padding: 5%;
              opacity: 0;
              overflow: hidden;
              :hover {
                opacity: 1
              }
              > p  {
                > span {
                  font-size: 12px;
                  text-decoration: underline;
                  color: #c1c1c1
                }
                > p {
                  font-size: 14px
                }
              }
            }
          }
        }

    }
`