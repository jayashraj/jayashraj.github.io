import React, { Component } from "react";
import Banner from "./Elements/Banner/Banner";
import Activity from "./Elements/Content/Activity";
import About from "./Elements/About";
import Posts from "./Elements/Content/Posts";
import Archive from "./Elements/Archive";
import Footer from "./Elements/Footer/Footer";
import styled from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Projects from "./Elements/Projects";

interface Props {}
interface State {}

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const userData = {
  name: "Jayash Raj Mudbhari",
  bio: "A web developer I guess.",
  coverImage: "../images/cover.jpg",
  userImage: "../images/face.jpg",
};
const aboutPage = {
  id: "test;",
  title: "About",
  date: "",
  content:
    "Hi, I am Jayash Raj Mudbhari. I am a self-taught web developer and this is my personal website.",
};
const getfromfetch: {
  id: string;
  title: string;
  date: string;
  content: string;
}[] = [
  {
    id: "103",
    title: "Project: To Do List",
    date: "3rd Jan, 20221",
    content:
      "I was working on a To Do list app with which I could easily see my daily tasks from a secondary laptop. This project uses Framer Motion to do few animations, styled componentents and local storage. You can find the project  [here.](/#/todo)",
  },

  {
    id: "102",
    title: "Features of this site",
    date: "1st January 2021",
    content:
      "This site is technically a single page app, hosted on github pages. It is made with React and react router. I used a little bit of TypeScript when making this site.",
  },
  {
    id: "101",
    title: "TODO: Need to implement",
    date: "29/12/2020 (Updated: 10/01/2021)",
    content: `
*  [ ] Mobile website  
*  [ ] Ordering of posts, proper date sheme,   
*  [x] projects page
*  [ ] photos page
*  [x] Markdown/Org editor
*  [ ] a button to allow projects to become full screen
*  [ ] autoplay (Record/ play/ clear) for drums
*  [ ] proirity (color) for todo
    
    My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
    `,
  },
];

export default class Home extends Component<Props, State> {
  state = {};
  render() {
    return (
      <Container>
        <HashRouter basename={process.env.PUBLIC_URL}>
          {/*for github pages, as it doesnt support client side routing apparently*/}
          <Banner profile={userData} />
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Activity {...props} assumeFetchedData={getfromfetch} />
                )}
              />
              <Route
                path="/about"
                render={(props) => <About {...props} data={aboutPage} />}
              />
              <Route
                path="/archive"
                render={(props) => (
                  <Archive {...props} assumeFetchedData={getfromfetch} />
                )}
              />
              <Route path="/projects" component={Projects} />
              <Route
                path="/posts/:post_id"
                render={(props) => <Posts {...props} data={getfromfetch} />}
              />
            </Switch>
          </AnimatePresence>
        </HashRouter>

        <Footer />
      </Container>
    );
  }
}
