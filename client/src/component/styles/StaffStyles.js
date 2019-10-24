import styled from 'styled-components';

export const StaffContainer = styled.div`

  margin-top: 120px;
  background: #eae9e8;
  box-shadow:  inset 0 0 10px #b7b7b7;
  padding: 50px 0 20px 0;
    >h1 {
      text-align: center;
    }

    >section {
      display: flex;
      grid-gap: 30px;
      margin-top: 120px;
      padding: 0 30px;
      flex-wrap: wrap;
      justify-content: center;
      
        /* -ms-overflow-style: none; 
        scrollbar-width: none;   */
        /* scrollbar-width: thin; */
      

      > .staff {
        margin: 0 5%;
        border-radius: 4px;
        text-align: center;
        :hover {
          box-shadow:0px 7px 12px -1px #a8a39f;
          .staffImg img {
            box-shadow: none;
            width: 150px
          }

        }
        .staffImg img {
          box-shadow:0px 7px 12px -1px black;
          width: 150px
        }
        .prisonerCredebtials {
          display: flex;
          flex-direction: column;
          line-height: 1.7em;

          >  h1 {
            margin: 10px 0 0 0;
            font-size: 20px;
          }
        }
      }

    }

`