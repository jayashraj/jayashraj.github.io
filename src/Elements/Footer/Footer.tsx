import React, { Component } from "react";
import styled from "styled-components";

interface Props {}
interface State {}
const StyledFooter = styled.footer`
  margin-top: 20px;
  min-height: 50px;
  background-color: #2b303a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default class Footer extends Component<Props, State> {
  state = {};

  render() {
    return <StyledFooter>Made with love and no $$$ </StyledFooter>;
  }
}
