
import styled from 'styled-components'


export const PrisonersContainer = styled.div`
  
    margin-top: 120px;
    >h1 {
      text-align: center;
    }
   
    > section {
      display: flex;  
      flex-wrap: wrap;
      justify-content: center;

      > .prisoner {
        width: 300px;
        margin: 30px;
        border-bottom: 3px solid #f79d5c;
        color: #888;
        border-radius: 4px 20px 20px;
        font-size: 14px;
        line-height: 1.7em;
        box-shadow: 0 3px 9px #b7b7b7;
        :hover {
          box-shadow: 0 11px 14px #b7b7b7;
        }

        .data {
          text-align: end;
          font-size: 10px;
           padding: 0 10px;
        }
        .prisonerImg img{
          width: 100%
        }
        .prisonerCredebtials {
          padding: 0 10px 10px; 
        }
      }
    }
  
`