

import styled, { css } from 'styled-components';

export const RehabMain = styled.div`
   
    > section {
        position: relative;
        top: 82px;
    }
    .addBtn {
        height: 51px;
        width: 51px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 50px;
        right: 50px;
        > * {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
            font-size: 7em;
            stroke-width: 1em;
        }
    }
    > button {
        margin: 50px 0;
        position: relative;
        
    }

`
export  const RehabModal = styled.div`
    display: ${props => props.show? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: #221c18b5;
    z-index: 10000;

    .modal-main {
        position:fixed;
        background: white;
        width: 60%;
        height: auto;
        top:50%;
        left:50%;
        padding: 5%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        grid-gap: 30px;
        @media (max-width: 500px) {
            width: 80%
        }
        > div {
            box-shadow: 0 4px 5px 0px #e1e1e1;
            grid-gap: 5px;
            border: 1px solid #f2f2f2;
            width: 94%;
            padding: 3%;
            color: #707070;
            > .rehabImgs {
                flex-basis: 200px;
                @media (max-width: 842px) {
                    min-width: 100%
                }
                > img {
                    width: 100%;
                    height: auto
                }
            }
            > .rehabDetail {
                justify-content: space-between;
                flex: 1;
                min-width: 270px;
                > div {
                    justify-content: space-between;
                    > .accDecBtns {
                        grid-gap: 5px;
                        > button {
                            :hover {
                                /* padding: initial */
                            }
                        }
                    }
                }
            }
        } 
        > button {
            align-self: flex-end
        }
    }

`