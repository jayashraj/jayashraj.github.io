export const user = {
  name: "Jayash Raj Mudbhari",
  bio: "A web developer I guess.",
  coverImage: "../images/cover.jpg",
  userImage: "../images/face.jpg",
};
export const about = {
  id: "test;",
  title: "About",
  date: "",
  content:
    "Hi, I am Jayash Raj Mudbhari. I am a self-taught web developer and this is my personal website.",
};
export const posts: {
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
  *  [x] Mobile website //Done on 13th/14th Feb 20202  
  *  [ ] Ordering of posts, proper date sheme,   
  *  [x] projects page
  *  [ ] photos page
  *  [x] Markdown/Org editor
  *  [ ] a button to allow projects to become full screen
  *  [ ] autoplay (Record/ play/ clear) for drums
  *  [ ] proirity (color) for todo

      `,
  },
];
