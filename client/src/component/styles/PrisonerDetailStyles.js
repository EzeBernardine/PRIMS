
import styled from 'styled-components'


export const DetailContainer = styled.div`
 
  > div:first-child{
        box-shadow: 0 0px 2px 2px #e1e1e1;
        background:  #ff5000; 
        h1, a {
            color:  #fff; 
        }
    }
  
 > section {
    p {
        margin: 0;
        padding: 0;
        line-height: 1.7em
    }
    h1, h2 {
        margin: 0;
        padding: 0;
        line-height: 2em
    }
     display: flex;
     width: 80%;
     margin: 100px auto;
     grid-gap: 20px;
     > aside {
         flex: 1
     }

     > .imgContainer {
        > img {
            width: 80%;
            margin: 50px auto;
            height: auto
        }
     }
     > .credentials {
         color: #2A2929;
         > svg {
            float: right;
            opacity: .8;
            :hover {
                opacity: 1;
                cursor: pointer;
            }
         }
         > p {
             display: flex;
             margin-top: 10px;
         }
         > button {
             margin-top: 20px
         }
     }
 }

    > .records {
        display: flex;
        flex-direction: column;
        > div:last-child {
            display: flex;
            flex-direction: column;
            grid-gap: 20px;
           > .dailyRecord {
            box-shadow: 0 0px 2px 2px #e1e1e1;
            padding: 20px;
                > p {
                    display: flex;
                    > .analysis { 
                        color: #2A2929;
                    }
                }
            :hover {
                background: #fff3ed
            }
            }
        }
    }

    .tag {
        color: #8c5b48;
        margin: 0 5px 0 0;
        background: #fff3ed;
        padding: 3px 5px;
        font-weight: bold;
        border-radius: 4px;
    }
    .date {
        color: #707070
    }
    .subtitle {
        min-width: 110px;
        color: #707070;
        font-size: 16px
    }
    > .addRecord {
      position: fixed;
      bottom: 50px;
      width: 40vw;
      z-index: 10;
      right: 50px;
      h1 {margin: 13px 0 31px 0; font-size: 20px}
      > * {
        width: 100%;
      }
      > div{
        margin: 0 auto;
      }
      button {width: 100%}
      textarea {resize: none}
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
 
`
