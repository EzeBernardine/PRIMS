

import styled , {css} from 'styled-components'

export const MenuCounter = styled.div`
  
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    z-index: 10000;
    transition: all 0.2s ease-in-out;
    height: auto;

    background-color: ${props => props.menu < 100 ? "transparent" : ' #fff'};


  }

  > h1 {
    color: ${props => props.menu > 100 ? "#ff5000" : ' #eee4d8'};
    margin-left: 10%;

  }
  > ul {
    margin: 0;
    padding: 0;
    display: inline-flex;
    margin-right: 10%;
    > a  {
    color: ${props => props.menu > 100 ? "#ff5000" : ' #eee4d8'};
      list-style: none;
      text-decoration: none;
      /* color: #eee4d8; */
      margin: 0 5px;
      :hover {
        text-decoration: underline;
        cursor: pointer;
        /* color: ${props => props.menu > 100 ?' #eee4d8'  : "#ff5000"}; */
      }
    }
  
`