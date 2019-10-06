
import styled from 'styled-components'


export const DetailContainer = styled.div`
 
  > div:first-child{
        background:  #ff5000;
        h1, a {
            color: white;
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
            width: 60%;
            margin: 50px auto;
            height: auto
        }
     }
     > .credentials {
         > p {
             display: flex;
             margin-top: 10px;
             > span:first-child {
                flex-basis: 200px
             }
             >small {
                 margin: 0 10px ;
                 color: #ff9200;
                 font-weight: bold
             }
         }
         > button {
             margin-top: 20px
         }
     }
 }
`