import React, { Component } from "react";

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
          <p>{this.props.data.content}</p>
        </StyledPage>
      </div>
    );
  }
}
