import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
interface Props {
  profile: {
    name: string;
    bio: string;
    coverImage: string;
    userImage: string;
  };
}
interface State {
  showHamburger: boolean;
}

const BannerContainer = styled.div`
  height: 300px;
  display: flex;
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const CoverImage = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  float: right;

  width: 30%;
  height: 100%;
  @media all and (max-width: 768px) {
    height: 300px;
  }
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

const Pages = styled.div`
  background-color: #2b303a;
  color: white;
  padding: 10px;
  position: relative;
  min-height: 78px;
  a {
    color: white;
    font-size: 24px;
    text-decoration: none;
  }
  a:hover {
    color: #d81e5b;
  }
  ul {
    display: flex;
    li {
      padding: 10px;
      margin: 0 10px 0 10px;
      list-style: none;
    }
  }
  @media all and (max-width: 650px) {
    ul {
      display: flex;
      flex-direction: column;
    }
  }
  @media all and (max-width: 480px) {
    height: 100%;
  }
`;
const SiteLogo = styled.h1`
  text-align: center;
  margin-top: 10px;
  @media all and (max-width: 380px) {
    font-size: 24px;
  }
`;
const HamButton = styled.button`
  position: absolute;
  right: 10px;
  top: 15px;
  color: #fafaff;
  border: none;
  background-color: #2b303a;

  &:hover {
    color: #d81e5b;
  }
  &:focus {
    outline: none;
  }
  h1 {
    padding: 5px;
  }
  @media all and (min-width: 768px) {
    display: none;
  }
`;

export default class Banner extends Component<Props, State> {
  state = {
    showHamburger: false,
  };
  toggleHamburger = () => {
    this.setState({ showHamburger: !this.state.showHamburger }, () => {
      console.log("Hamburger toggled, it is now", this.state.showHamburger);
    });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <BannerContainer>
          <CoverImage src={this.props.profile.coverImage} alt="" />
          <UserInfo>
            <div>
              <img src={this.props.profile.userImage} alt="" />

              <Link to="/about">
                <h2>{this.props.profile.name}</h2>
              </Link>
              <p>{this.props.profile.bio}</p>
            </div>
          </UserInfo>
        </BannerContainer>

        <Pages>
          <HamButton id="hamburger" onClick={this.toggleHamburger}>
            {!this.state.showHamburger ? <h1>&#10005;</h1> : <h1>&#9776;</h1>}
          </HamButton>
          <ul style={this.state.showHamburger ? { display: "none" } : {}}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/archive">Archive</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          {!this.state.showHamburger ? null : (
            <SiteLogo>
              <NavLink to="/">Jayash.xyz</NavLink>
            </SiteLogo>
          )}
        </Pages>
      </div>
    );
  }
}
