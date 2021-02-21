import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import ReactMarkdown from "react-markdown";
import { StyledPost, Heading, SimpleDiv } from "../Config/Styles";
import { post, posts } from "../Config/Types";

interface State {}
// {(this.props.location.state as post).content}

type Props = {
  posts: posts;
};

export default class Posts extends Component<
  Props & RouteComponentProps,
  State
> {
  state = {};

  directPost = this.props.posts.map(({ id, title, date, content }, index) => {
    let path = this.props.location.pathname.split("/");

    if (id === path[path.length - 1]) {
      return (
        <SimpleDiv key={id}>
          <StyledPost>
            <Heading>
              <h1>{title}</h1>
              {date ? <p className="date-content">{date}</p> : <p></p>}
            </Heading>
            <ReactMarkdown children={content}></ReactMarkdown>
          </StyledPost>
        </SimpleDiv>
      );
    } else return null;
  });

  render() {
    if (this.props.location.state as post) {
      return (
        <SimpleDiv>
          <StyledPost>
            <Heading>
              <h1>{(this.props.location.state as post).title}</h1>
              {(this.props.location.state as post).date ? (
                <p>{(this.props.location.state as post).date}</p>
              ) : (
                <p></p>
              )}
            </Heading>
            <ReactMarkdown
              children={(this.props.location.state as post).content}
            ></ReactMarkdown>
          </StyledPost>
        </SimpleDiv>
      );
    } else {
      return <div style={{ flex: 1 }}>{this.directPost}</div>;
    }
  }
}
