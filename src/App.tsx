import React, { Component, Suspense } from "react";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Posts from "./Components/Pages/Posts";
import Archive from "./Components/Pages/Archive";
import Footer from "./Components/Footer";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Projects from "./Components/Pages/Projects";
import { lightTheme, darkTheme } from "./Components/Config/Theme";
import { createGlobalStyle } from "styled-components";
import { user, about, posts } from "./Data";
import { theme } from "./Components/Config/Theme";

const GlobalStyle = createGlobalStyle<{ theme: theme }>`
  * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  background-color: ${(props) => `${props.theme.body}`};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
`;

interface Props {}
interface State {}

const Container = styled.div`
  width: 80vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 480px) {
    width: 90vw;
  }
`;

export default class App extends Component<Props, State> {
  state = {
    darkModeOn: false,
  };
  toggleDarkMode = () => {
    console.log(this.state);
    this.setState({
      darkModeOn: !this.state.darkModeOn,
    });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.darkModeOn ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Suspense fallback={<p>Loading ...</p>}>
          <Container>
            <HashRouter basename={process.env.PUBLIC_URL}>
              {/*for github pages, as it doesnt support client side routing apparently*/}
              <Header
                profile={user}
                toggleDarkMode={this.toggleDarkMode}
                darkModeOn={this.state.darkModeOn}
              />
              <AnimatePresence initial={false} exitBeforeEnter>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => <Home {...props} posts={posts} />}
                  />
                  <Route
                    path="/about"
                    render={(props) => (
                      <About {...props} user={user} page={about} />
                    )}
                  />
                  <Route
                    path="/archive"
                    render={(props) => <Archive {...props} posts={posts} />}
                  />
                  <Route path="/projects" component={Projects} />
                  <Route
                    path="/posts/:post_id"
                    render={(props) => <Posts {...props} posts={posts} />}
                    //may seem confusing but for posts components pass posts array as posts props
                  />
                </Switch>
              </AnimatePresence>
            </HashRouter>

            <Footer />
          </Container>
        </Suspense>
      </ThemeProvider>
    );
  }
}
