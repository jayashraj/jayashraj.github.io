import React, { Component } from "react";

import styled from "styled-components";

interface Props {
  data: {
    id: string;
    title: string;
    date: string;
    content: string;
  };
  profile: {
    name: string;
    bio: string;
    coverImage: string;
    userImage: string;
  };
}
interface State {}

const StyledPage = styled.div`
  flex: 1;
  height: 100%;
  background-color: rgb(250, 250, 255);
  margin: 10px 0 20px 0;
  padding: 20px;

  border-radius: 3px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);
`;

const Heading = styled.div`
  h1 {
    color: #d81e5b;
  }
  p {
    color: #555555;
  }
  @media all and (max-width: 768px) {
    text-align: center;
  }
`;

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
    background-color: #fafaff;
    padding: 20px;
    height: 100%;

    a {
      text-decoration: none;
    }
    h2 {
      color: #d81e5b;
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
      <div style={{ flex: 1 }}>
        <StyledPage>
          <Heading>
            <h1>{this.props.data.title}</h1>
          </Heading>
          <MobileView>
            <UserInfo>
              <div>
                <img src={this.props.profile.userImage} alt="" />
                <h2>{this.props.profile.name}</h2>
              </div>
            </UserInfo>

            <p>{this.props.data.content}</p>
          </MobileView>
          <DesktopView>
            <p>{this.props.data.content}</p>
          </DesktopView>
        </StyledPage>
      </div>
    );
  }
}
