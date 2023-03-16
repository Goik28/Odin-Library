# Library

- This is my take on the "Library" project from "The Odin Project" course, Javascript path, after I refactored it to use Typescript, ReactJS, Google's Firebase and TailwindCss styling.
- For this project to work, it's needed to add a firebase-configuration file to root.
- The old version was branched (old-main) and has a live version: [HERE](https://goik28.github.io/Odin-Library).
- The new versions is hosted with Firebase Hosting: [HERE](https://odin-library-1d760.web.app/).

## The Objective

- To create a library app that user could keep track of their book's list and update the reading status of them.
- To use Firebase Auth to allow access only to identified users.
- To use Firebase Firestore to persist the individual library data and allow only their owner access to read and modify that data.

## To improve

- Write tests for the functions and for the react user flow.
- Better style the application.
- Add toggle hide the add new book section.
- Add find book function.
- Integrate with some book API to facilitate adding of new books.