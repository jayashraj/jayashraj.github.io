import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  data: {
    id: string;
    title: string;
    date: string;
    content: string;
  };
}
interface State {}

const StyledPage = styled.div`
  //flex: 1; fils remaining space
  background-color: rgb(250, 250, 255);
  margin: 10px 0 0px 0;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);
`;
const StyledContainer = styled.div`
  //flex: 1; fils remaining space
  height: 100%;
  width: 100%;
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
  margin: 10px;
  flex: 0 0 350px;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  div p {
    display: none;
  }

  div:hover p {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 2;
    margin: 10px;
    width: 250px;
  }
  div a {
    color: black;
    text-decoration: none;
  }
  div:hover img {
    opacity: 0.1;
  }
  img {
    position: relative;
    z-index: 1;
    display: block;
    max-width: 800px;
    max-height: 800px;
    width: 100%;
    height: 100%;
  }
  @media all and (max-width: 480px) {
    flex: 0 0 200px;
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
      <div>
        <StyledPage>
          <Heading>
            <h1>Projects</h1>
          </Heading>
          <StyledContainer>
            <StyledBox>
              <div>
                <a href="https://jayash.xyz/calculator/">
                  <p>A simple calculator made with React.</p>
                  <img
                    className="project-image"
                    src="../images/calculator.png"
                    alt=""
                  />
                </a>
              </div>
            </StyledBox>
            <StyledBox>
              <div>
                <a href="https://jayash.xyz/pomodoro">
                  <p>A simple pomodoro timer made with React.</p>
                  <img
                    className="project-image"
                    src="../images/pomodoro.png"
                    alt=""
                  />
                </a>
              </div>
            </StyledBox>

            <StyledBox>
              <div>
                <a href="https://jayash.xyz/drums/">
                  <p>A drumpad, made with React.</p>
                  <img
                    className="project-image"
                    src="../images/drums.png"
                    alt=""
                  />
                </a>
              </div>
            </StyledBox>
            <StyledBox>
              <div>
                <a href="https://jayash.xyz/todo/">
                  <p>
                    To Do List, uses local strage to keep the items persistent
                    until the cache is cleared.
                  </p>
                  <img
                    className="project-image"
                    src="../images/todolist.png"
                    alt=""
                  />
                </a>
              </div>
            </StyledBox>
          </StyledContainer>
        </StyledPage>
      </div>
    );
  }
}
