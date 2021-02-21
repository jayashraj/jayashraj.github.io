import React, { Component } from "react";
import { Heading, StyledPage, SimpleDiv } from "../Config/Styles";
import styled from "styled-components";
import { user, page } from "../Config/Types";

interface Props {
  page: page;
  user: user;
}

interface State {}

const MobileView = styled.div`
  display: none;
  @media all and (max-width: 768px) {
    display: block;
  }
`;
const DesktopView = styled.div`
  display: none;
  @media all and (min-width: 768px) {
    display: block;
  }
`;

const UserInfo = styled.div`
  width: 50%;
  height: 100%;
  display: inline;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => `${props.theme.background}`};
    padding: 20px;
    height: 100%;

    a {
      text-decoration: none;
    }
    h2 {
      color: ${(props) => `${props.theme.heading}`};
    }
  }

  img {
    width: 150px;
    height: auto;
  }
`;
export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <SimpleDiv>
        <StyledPage>
          <MobileView>
            <UserInfo>
              <div>
                <img src={this.props.user.userImage} alt="" />
                <h2>{this.props.user.name}</h2>
              </div>
            </UserInfo>
            <p>{this.props.page.content}</p>
          </MobileView>
          <DesktopView>
            <Heading>
              <h1>{this.props.page.title}</h1>
            </Heading>
            <p>{this.props.page.content}</p>
          </DesktopView>
        </StyledPage>
      </SimpleDiv>
    );
  }
}
