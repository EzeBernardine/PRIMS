import styled from 'styled-components'

export const SignUpContainer = styled.div`
 background: white;
 margin-top: 20px;

/* the first flex housing sign up and form */
> aside {
    position: fixed;
    top: 100px;
    left: 10%;
    display: grid;
    grid-gap: 20px;
    > a {
    border: 1px solid #ff5000;
    color: #ff5000;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 50%;
    height: 50px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    :focus {
        outline: none
    }
    }
}
> div { 
     width: 40%;
     margin: 50px auto;
     box-shadow: 0 0 8px rgba(140, 139, 139, 0.8);
      @media(max-width: 900px) {
        width: 70%;
      }
      @media(max-width: 500px) {
        width: 90%;
      }

 >  div { 
   width: 80%;
     margin: auto;
     padding-top: 40px;

     > h1 {
       margin: 20px 0 50px 0;
       color: #707070;
     }

     form { /* The form and its contents*/
         > div {
             grid-gap: 7px;
             margin-bottom: 20px;
             justify-content: color;
            > label {
                position: relative;
                top: 0;
                color: #979795;
                font-size: 14px;
                margin-left: 5px;
            }
            >input {
                border: 1px solid #d7d6d3;
                padding: 7px;
                color: #707070;
            }
           > div {
               flex: 1;
               > label {
                position: relative;
                top: 0;
                color: #979795;
                font-size: 14px;
                margin-left: 5px;
            }
            >input {
                border: 1px solid #d7d6d3;
                padding: 7px;
                color: #707070;
            }
           }
         }

       
        > .btn {  /* For the botton  */
          margin: 60px auto 30px auto;
        }

        .secEle {
            height: 25px;
            border: 1px solid #f1f1f1;
            width: 150px;
            display: flex;
            justify-content: center;
            box-shadow:  inset 0 0 10px #e6e6e6;
            align-items: center;
            cursor: pointer;

            :hover {
              box-shadow:  inset 0 0 10px #b0a8a4;
              *{  color: #979795   }
            };
            input:nth-child(1) {
              cursor: pointer;
              width: 100px;
              height: 25px;
              position: absolute;
              opacity: 0
            }
            label {
              cursor: pointer;
              color: #8e8e8e;
              font-size: 13px;
            }
        }
     }

  }

}
 
`;
export const Flex = styled.div`
 flex-direction: ${props => props.row  ? "row" : ' column'};
 justify-content: ${props => props.justifyCenter  ? "center" : ' stretch'};
 display: flex;
`;