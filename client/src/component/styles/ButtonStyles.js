
import img from '../image/prisonBackWall.png';

import styled, { css } from 'styled-components'

export const Button = styled.button`

/* background: #ff5000; */
background: ${props => 
        props.dark ? '#ac5f3b' 
        :  props.red ? 'red' 
            : '#ff5000'  
    };
border: none;
height: 51px;
width: 203px;
border-radius: 57px;
color: white;
cursor: pointer;
font-weight: bold;
    :focus {
        outline: none
    }
    :hover {
        border: ${props => 
            props.dark ? '1px solid #ac5f3b' 
                : props.red ? '1px solid red' 
                    : '1px solid #ff5000'  
        };
        color:  ${props => 
            props.dark ? '#ac5f3b' 
                : props.red ? 'red' 
                : '#ff5000'  
        };;
        background: white;
    }

`