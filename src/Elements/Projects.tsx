import React, { Component } from "react";

import styled from "styled-components";

interface State {}
interface Props {}
const StyledPage = styled.div`
  background-color: rgb(250, 250, 255);

  //flex: 1; //fils remaining space in the middle between header and footer
  margin: 10px 0 10px 0;
  padding: 20px;

  border-radius: 3px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);

  h2 {
    color: #d81e5b;
  }
  a {
    text-decoration: none;
  }
  h2:hover {
    color: #2b303a;
  }
`;
const StyledContainer = styled.div`
  //flex: 1; fils remaining space
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media all and (max-width: 600px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;
const StyledBox = styled.div`
  //flex: 1; fils remaining space
  margin: 10px 10px 20px 10px;
  padding: 10px;
  position: relative;
  flex: 0 0 350px;
  border-bottom: solid 1px #d81e5b;
  div {
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: center;
  }

  img {
    position: relative;
    z-index: 1;
    display: block;
    max-width: 800px;
    max-height: 800px;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  @media all and (max-width: 480px) {
    flex: 0 0 200px;
  }
  @media all and (min-width: 768px) {
    border-bottom: none;
    padding: 0px;
    div p {
      display: none;
    }
    div:hover p {
      display: flex;
      position: absolute;
      top: 0px;
      text-align: center;
      z-index: 2;
      margin: 10px;
    }
    div a {
      color: black;
      text-decoration: none;
    }

    div:hover img {
      opacity: 0.1;
    }
  }
`;

const Heading = styled.div`
  margin-bottom: 20px;
  h1 {
    color: #d81e5b;
  }
  p {
    color: #555555;
  }
`;

export default class Projects extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div style={{ flex: 1 }}>
        <StyledPage>
          <Heading>
            <h1>Projects</h1>
          </Heading>
          <StyledContainer>
            <StyledBox>
              <div>
                <a href="https://jayash.xyz/todo/">
                  <img
                    className="project-image"
                    src="../images/todolist.png"
                    alt=""
                  />
                  <p>
                    To Do List, uses local strage to keep the items persistent
                    until the cache is cleared.
                  </p>
                </a>
              </div>
            </StyledBox>
            <StyledBox>
              <div>
                <a href="https://jayash.xyz/calculator/">
                  <img
                    className="project-image"
                    src="../images/calculator.png"
                    alt=""
                  />
                  <p>A simple calculator made with React.</p>
                </a>
              </div>
            </StyledBox>
            <StyledBox>
              <div>
                <a href="https://jayash.xyz/pomodoro">
                  <img
                    className="project-image"
                    src="../images/pomodoro.png"
                    alt=""
                  />
                  <p>A simple pomodoro timer made with React.</p>
                </a>
              </div>
            </StyledBox>

            <StyledBox>
              <div>
                <a href="https://jayash.xyz/drums/">
                  <img
                    className="project-image"
                    src="../images/drums.png"
                    alt=""
                  />
                  <p>A drumpad, made with React.</p>
                </a>
              </div>
            </StyledBox>
          </StyledContainer>
        </StyledPage>
      </div>
    );
  }
}
