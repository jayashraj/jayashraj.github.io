import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  assumeFetchedData: {
    id: string;
    title: string;
    date: string;
    content: string;
  }[];
}
interface State {}

const StyledPage = styled.div`
  background-color: rgb(250, 250, 255);
  //flex: 1; //fils remaining space in the middle between header and footer
  margin: 10px 0 10px 0;
  padding: 20px;
  height: 100%;
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
const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted black;
  p {
    color: #2b303a;
  }
`;

export default class Archive extends Component<Props, State> {
  state = {};

  postList = this.props.assumeFetchedData.map(
    ({ id, title, date, content }, index) => {
      return (
        <div key={index}>
          <Link
            to={{
              pathname: `/posts/${id}`,
              state: { id, title, date, content },
            }}
          >
            <StyledItem>
              <h2>{title}</h2>
              <p>{date}</p>
            </StyledItem>
          </Link>
          <br />
        </div>
      );
    }
  );

  render() {
    return (
      <div style={{ flex: 1 }}>
        {" "}
        <StyledPage>
          <h1>Archive</h1>
          <br />
          {this.postList}
        </StyledPage>
      </div>
    );
  }
}
