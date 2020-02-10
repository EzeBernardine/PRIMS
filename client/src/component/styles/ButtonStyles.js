import img from "../image/prisonBackWall.png";

import styled, { css } from "styled-components";

export const Button = styled.button`
  /* background: #ff5000; */
  background: ${props =>
    props.dark
      ? "#ac5f3b"
      : props.red
      ? "#fff"
      : props.RGreen
      ? "#fff"
      : "#ff5000"};
  border: ${props =>
    props.dark
      ? "1px solid #ac5f3b"
      : props.red
      ? "1px solid red"
      : props.RGreen
      ? "1px solid green"
      : "1px solid #ff5000"};
  height: ${props => (props.SM ? "max-content" : "51px")};
  padding: ${props => props.SM && "9px 16px"};
  width: ${props => (props.SM ? "max-content" : "203px")};
  border-radius: ${props => (props.SM ? "5px" : "57px")};
  color: ${props => (props.RGreen ? "green" : props.red ? "red" : "#fff")};
  cursor: pointer;
  font-weight: bold;
  :focus {
    outline: none;
  }
  :hover {
    border: ${props =>
      props.dark
        ? "1px solid #ac5f3b"
        : props.red
        ? "1px solid red"
        : props.RGreen
        ? "1px solid green"
        : "1px solid #ff5000"};
    color: ${props =>
      props.dark
        ? "#ac5f3b"
        : props.red
        ? "#fff"
        : props.RGreen
        ? "#fff"
        : "#ff5000"};
    background: ${props =>
      props.RGreen ? "green" : props.red ? "red" : "#fff"};
  }
`;
