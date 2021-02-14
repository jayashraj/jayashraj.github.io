import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import marked from "marked";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
interface State {}
// {(this.props.location.state as PostState).content}
const StyledPost = styled.div`
  background-color: #fafaff;
  height: 100%;

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
type Props = {
  data: {
    id: string;
    title: string;
    date: string;
    content: string;
  }[];
};

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
`;
type PostState = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export default class Posts extends Component<
  Props & RouteComponentProps,
  State
> {
  state = {};

  directPost = this.props.data.map(({ id, title, date, content }, index) => {
    let path = this.props.location.pathname.split("/");

    if (id === path[path.length - 1]) {
      return (
        <div key={id} style={{ flex: 1 }}>
          <StyledPost>
            <Heading>
              <h1>{title}</h1>
              {date ? <p>{date}</p> : <p></p>}
            </Heading>
            <ReactMarkdown children={content}></ReactMarkdown>
          </StyledPost>
        </div>
      );
    }
  });

  render() {
    if (this.props.location.state as PostState) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ flex: 1 }}
        >
          <StyledPost>
            <Heading>
              <h1>{(this.props.location.state as PostState).title}</h1>
              {(this.props.location.state as PostState).date ? (
                <p>{(this.props.location.state as PostState).date}</p>
              ) : (
                <p></p>
              )}
            </Heading>
            <ReactMarkdown
              children={(this.props.location.state as PostState).content}
            ></ReactMarkdown>
          </StyledPost>
        </motion.div>
      );
    } else {
      return <div style={{ flex: 1 }}>{this.directPost}</div>;
    }
  }
}
