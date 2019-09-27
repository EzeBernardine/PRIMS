

import styled, { css } from 'styled-components'

export const PrisonerContainer = styled.div`
    > div {
        display: flex;
        width: 300px;
        color: #4f4f4f;
        grid-gap: 20px;
        padding: 10px;
        /* border: 1px solid #fafafa; */
        box-shadow: 0 1px 5px rgba(0,0,0,0.25);

        > .prisonerImgDiv  {
            > img{
                padding: 0;
                margin: 0;
            }
        }
        > div {
            > img {
                width: 100px;
            }
        }   
        .personalDetail {
            > p {
                margin: 0;
                font-size: 12px;
                line-height: 1.7em;

                > p {
                    margin: 0;
                    font-size: 10px
                }
            }
        }
    }     
`