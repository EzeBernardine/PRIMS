import img from '../image/prisonersBack.jpg';

import styled from 'styled-components'

export const StyledCounter = styled.div`

`
export const LandingView = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');
font-family: 'Fira Sans', sans-serif;

    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: cover;
    background-size:   cover;
    background-blend-mode: overlay;
    background-color: #221c18;
    height:  85vh;
    display: flex;
    align-items: center;
    color: white;
    text-align: center;
    justify-content: center;
    /* position: relative;
    top: 82px; */


    > aside {
      /* margin-left: 10%; */
      border-bottom: 1px solid white;
      h1 {
        font-size: 30px
      }
    }
  
`

export const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyCenter ? "center" : ' flex-start'};
  grid-gap:  ${props => props.gap ? "50px" : ' 0'};
  align-items: ${props => props.alignCenter ? "center" : ' stretch'};
  flex-direction:  ${props => props.column ? "column" : ' row'};

` 

export const Section = styled.section`
  display: flex;
  justify-content: ${props => props.justifyCenter ? "center" : ' flex-start'};
  align-items: ${props => props.alignCenter ? "center" : ' stretch'};
  margin: 120px;
  grid-gap:  ${props => props.gap ? "50px" : ' 0'};
  flex-direction:  ${props => props.column ? "column" : ' row'};
  margin: 120px;

    > .imgContainer {
      flex: 1;
     > img {
       width: 80%;
     }
    }

    > .text  {
        flex: 1;
        h1 {
        color: #707070;
          font-size: 20px;
        }
        p {
        text-align: left;
        color: #2A2929;
        letter-spacing: 1.4px;
        line-height: 1.7em
      }
    }



    > .techEnvMain {
      align-items: stretch;
      > p {
        margin: 50px auto;
        color: #707070;
        font-size: 20px;
        text-align: center;
      }
      > .techContainer {
        flex-wrap: wrap;
        justify-content: space-around;
        >  .techEnv {
          flex-direction: column;
          grid-gap: 20px;
          padding: 20px;
          max-width: 250px;

            > .techEnvImg {
            > img {
              width: 30%;
            }
            }
            > h2 {
              color: #2A2929;
              font-size: 16px;
              margin: 0;
            }
            > p {
              margin: 0;
              color: #2A2929;
              font-size: 14px;
              text-align: center;
            }
        }

      }
      > .techBigPara { 
        width: 62%;
        text-align: center;
        font-size: 14px;
      }
    }


@media (max-width: 900px) {
  flex-direction: column;
  align-items: center;
  margin: 50px;
  grid-gap: 50px;
  >.techEnvMain > .techBigPara {
    width: 80%;
  }
}
@media (max-width: 500px) {
  margin: 20px;
  flex-direction: column;
  align-items: center;
  grid-gap: 50px;
    > .text p , .text h1{
      text-align: center;
    }
}
` 