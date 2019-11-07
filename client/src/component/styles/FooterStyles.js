import styled from 'styled-components';

export const FooterContainer = styled.div`
  /* margin: 150px auto 0; */
  background-color: #221c18;
  /* height: 70px; */
  padding: 20px 0;
  color: #c1b1a9;

  > div {
    align-items: center;
      > p {
      margin: 0;
      text-align: center;
    }
    > div {
      flex-direction: row;
      grid-gap: 10px;
    }
  }

  > .form {
      position: fixed;
      top: 0;
      z-index: 10000;
      margin: 0;
      height: 100vh;
      width: 100%;
      background: #221c18b5;
      overflow-y: scroll;
    > div {
      background: white;
       > header {
          color: #707070;
          padding: 40px 0;
          width: 80%;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
            > h1 {
              font-size: 1.5em
            }
            > span > svg {
              @media(max-width: 600px) {font-size: 2em}
                font-size: 30px;
                :hover {
                    cursor: pointer;
                }
            }
        }
      > div {
        padding: 40px 0;
      }
    }
  }
`