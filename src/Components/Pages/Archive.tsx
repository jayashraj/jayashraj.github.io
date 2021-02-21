import React, { Component } from "react";
import { Link } from "react-router-dom";

import { StyledPage, Heading, SimpleDiv, StyledButton } from "../Config/Styles";

import { posts } from "../Config/Types";

interface Props {
  posts: posts;
}
interface State {
  showShortPosts: boolean;
  visiblePosts: any;
}

export default class Archive extends Component<Props, State> {
  state = {
    showShortPosts: false,
    visiblePosts: null,
  };

  toggleShortPosts = () => {
    console.log(this.state);

    this.setState(
      {
        showShortPosts: !this.state.showShortPosts,
      },
      () => {
        this.renderPosts();
      }
    );
  };

  renderPosts = () => {
    let visiblePosts = this.props.posts.map(
      ({ id, title, date, type, content }, index) => {
        if (type === "short" && this.state.showShortPosts) {
          return (
            <div key={index}>
              <Heading>
                <p>{content}</p>
                <p className="date-content">{date}</p>
              </Heading>
              <br />
            </div>
          );
        } else if (type === "short" && !this.state.showShortPosts) {
          return null;
        } else {
          return (
            <div key={index}>
              <Link
                to={{
                  pathname: `/posts/${id}`,
                  state: { id, title, date, type, content },
                }}
              >
                <Heading>
                  <h2>{title}</h2>
                  <p className="date-content">{date}</p>
                </Heading>
              </Link>
              <br />
            </div>
          );
        }
      }
    );
    this.setState({ visiblePosts: visiblePosts });
  };
  componentDidMount = () => {
    this.renderPosts();
  };

  render() {
    return (
      <SimpleDiv>
        <StyledPage>
          <Heading>
            <h1>Archive</h1>
            <StyledButton onClick={this.toggleShortPosts}>
              {this.state.showShortPosts
                ? "Hide Short Posts"
                : "Show Short Posts"}
            </StyledButton>
          </Heading>
          <br />
          {this.state.visiblePosts}
        </StyledPage>
      </SimpleDiv>
    );
  }
}
