import React, { Component } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
interface ActivityProps {
  assumeFetchedData: {
    id: string;
    title: string;
    date: string;
    content: string;
  }[];
}
interface State {}

const StyledPost = styled.div`
  background-color: #fafaff;
  margin: 10px 0 10px 0;

  padding: 20px;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);
  ul {
    margin-left: 20px;
  }
  a {
    color: #d81e5b;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted black;
  margin-bottom: 10px;
  h1 {
    color: #d81e5b;
  }
  p {
    color: #555555;
  }
  h1:hover {
    color: #2b303a;
  }
`;
type PostProps = {
  data: {
    id: string;
    title: string;
    date: string;
    content: string;
  };
};

class Post extends Component<PostProps, State> {
  state = {};

  render() {
    return (
      <StyledPost>
        <Link
          to={{
            pathname: `/posts/${this.props.data.id}`,
          }}
          style={{ textDecoration: "none" }}
        >
          <Heading>
            <h1>{this.props.data.title}</h1>
            {this.props.data.date ? <p>{this.props.data.date}</p> : <p></p>}
          </Heading>
        </Link>
        <ReactMarkdown children={this.props.data.content}></ReactMarkdown>
      </StyledPost>
    );
  }
}

export default class Activity extends Component<ActivityProps, State> {
  state = {};
  /*   componentWillUnmount() {
    console.log("unmounting");
  } */
  postList = this.props.assumeFetchedData.map((x, index) => {
    return <Post key={index} data={x} />;
  });

  render() {
    return <div style={{ flex: 1 }}>{this.postList}</div>;
  }
}
