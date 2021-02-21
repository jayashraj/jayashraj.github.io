import { posts as postsType } from "./Components/Config/Types";

export const user = {
  name: "Jayash Raj Mudbhari",
  bio: "A web developer I guess.",
  coverImage: "../images/cover.jpg",
  coverImageDark: "../images/cover_dark.jpg",
  userImage: "../images/face.jpg",
};
export const about = {
  id: "test;",
  title: "About",
  date: "",
  content:
    "Hi, I am Jayash Raj Mudbhari. I am a self-taught web developer and this is my personal website.",
};
export const posts: postsType = [
  {
    id: "104",
    title: "",
    date: "3rd Jan, 20221",
    type: "short",
    content: "Working on: making this website more social media like.",
  },
  {
    id: "103",
    title: "Project: To Do List",
    date: "3rd Jan, 20221",
    type: "post",
    content:
      "I was working on a To Do list app with which I could easily see my daily tasks from a secondary laptop. This project uses Framer Motion to do few animations, styled componentents and local storage. You can find the project  [here.](/#/todo)",
  },
  {
    id: "102.5",
    title: "",
    date: "3rd Jan, 20221",
    type: "short",
    content: "Made some changes to the layout of the website.",
  },
  {
    id: "102",
    title: "Features of this site",
    date: "1st January 2021",
    type: "post",
    content:
      "This site is technically a single page app, hosted on github pages. It is made with React and react router. I used a little bit of TypeScript when making this site.",
  },
  {
    id: "101",
    title: "TODO: Need to implement",
    date: "29/12/2020 (Updated: 10/01/2021)",
    type: "post",
    content: `
  *  [x] Mobile website //Done on 13th/14th Feb 20202  
  *  [ ] Ordering of posts, proper date sheme,   
  *  [x] projects page
  *  [ ] photos page
  *  [x] Markdown renderer
      `,
  },
];
