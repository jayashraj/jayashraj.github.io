import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { StyledPost, Heading, SimpleDiv, FewLines } from "../Config/Styles";
import { post, posts } from "../Config/Types";

interface ActivityProps {
  posts: posts;
}
type PostProps = {
  post: post;
};
interface State {}

class Post extends Component<PostProps, State> {
  state = {};

  render() {
    return (
      <StyledPost>
        <Link
          to={{
            pathname: `/posts/${this.props.post.id}`,
          }}
          style={{ textDecoration: "none" }}
        >
          <Heading>
            <h1>{this.props.post.title}</h1>
            {this.props.post.date ? (
              <p className="date-content">{this.props.post.date}</p>
            ) : (
              <p></p>
            )}
          </Heading>
        </Link>
        <ReactMarkdown children={this.props.post.content}></ReactMarkdown>
      </StyledPost>
    );
  }
}

export default class Home extends Component<ActivityProps, State> {
  state = {};
  /*   componentWillUnmount() {
    console.log("unmounting");
  } */
  postList = this.props.posts.map((x, index) => {
    if (x.type === "short") {
      return (
        <FewLines key={index}>
          <ReactMarkdown children={x.content}></ReactMarkdown>
          <p className="date-content">{x.date}</p>
        </FewLines>
      );
    } else {
      return <Post key={index} post={x} />;
    }
  });

  render() {
    return <SimpleDiv>{this.postList}</SimpleDiv>;
  }
}
