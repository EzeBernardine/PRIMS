

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
    right: 0;
    bottom: 0;
    width:100%;
    height: 100%;
    background: #221c18b5;
    z-index: 10000;

    .modal-main {
        position: absolute;
        background: white;
        width: 60%;
        height: auto;
        top: 3%;
        bottom: 3%;
        left: 0%;
        right: 0%;
        margin: auto;
        @media (max-width: 500px) {
            width: 80%
        }
        > div {
            padding: 2%;
            display: flex;
            flex-direction: column;
            grid-gap: 30px;
            height: 96%;
           > div {
                overflow-y: scroll;
                overflow-x: hidden;
                ::-webkit-scrollbar-thumb {
                    background-color: #000000;
                }
                ::-webkit-scrollbar {
                    width: 6px;
                    background-color: #F5F5F5;
                } 
                > div {
                    box-shadow: 0 4px 5px 0px #e1e1e1;
                    grid-gap: 5px;
                    border: 1px solid #f2f2f2;
                    width: 93%;
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
                        > h1 {font-size: 1.2em;}
                        > div {
                            justify-content: space-between;
                            > .accDecBtns {
                                grid-gap: 5px;
                            }
                        }
                    }
                } 
           }
            > button {
                align-self: flex-end
            }
            > header {
                display: flex;
                border-bottom: 2px solid #f0f0f0;
                justify-content: space-between;
                align-items: center;
                padding: 10px 5px;
                > h1 {
                    font-size: 1.5em; color: #4a4542;
                @media(max-width: 600px) {font-size: 1.1em}
                }
                > span > svg {
                @media(max-width: 600px) {font-size: 1.1em}
                        font-size: 30px;
                        color: #707070;
                        :hover {
                            cursor: pointer;
                        }
                }
            }
        }
    }

`   
