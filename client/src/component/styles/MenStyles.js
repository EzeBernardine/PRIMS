

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
    margin-left: 10%;
    > a {
      color: ${props => props.menu > 100 ? "#ff5000" : ' #eee4d8'};
      text-decoration: none
      }
  }
  > ul {
    margin: 0;
    padding: 0;
    display: inline-flex;
    margin-right: 10%;
    >  {
      li {
        list-style: none;
        a  {
          color: ${props => props.menu > 100 ? "#ff5000" : ' #eee4d8'};
          text-decoration: none;
          font-weight: bold;
          margin: 0 5px;
          :hover {
            border-bottom: ${props => props.menu > 100 ? " 3px solid #ff5000" : ' 3px solid #eee4d8'};
            cursor: pointer;
            /* color: ${props => props.menu > 100 ?' #eee4d8'  : "#ff5000"}; */
          }
        }
      }
    }
  
`