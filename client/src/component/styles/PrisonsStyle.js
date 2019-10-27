

import styled, { css } from 'styled-components';

export const PrisonsMain = styled.div`
    > div:first-child{
        background:  #ff5000;
        h1, a {
            color: white;
        }
    }

    > section {
      p, h1, h2 {
        padding: 0;
        margin: 0;
        line-height: 1.7em
      }
      position: relative;
      top: 82px;
        > div {
          width: 80%;
          margin: 0 auto;
          padding: 50px 0;
          > div {
            box-shadow: 0 4px 5px 0px #e1e1e1;
            max-width: 300px;
            min-width: 300px;
            > div {
              width: 100%;
              > img {
                width: 100%
              }
            }
            > footer {
              padding: 10px;
              > div {
              }
            }
          }
        }

    }
`