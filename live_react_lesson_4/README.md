# React Lesson 4 (Bootstrap, APIs, and axios)

In the lesson we'll be covering these topics:
- Integrating Bootstrap with React.
- Calling APIs with axios()

When creating your own React project, in order to use React-Bootstrap and Axios, you must install them with Node Package Manager.
The terminal command below will do both:
``npm install axios react-bootstrap bootstrap``

# What is axios?
Axios is a third party library for making HTTP requests, which we make with the axios() function. It is an alternative to using JavaScript's built-in function, fetch(). Unlike fetch(), axios() automatically converts response data to JSON, among other distinctive benefits.

Axios Documentation: https://axios-http.com/docs/intro

# What is Bootstrap?
Bootstrap is a CSS framework, which is essentially a gigantic CSS file which defines and styles a variety of CSS classes, ids, and variables. Usually it is imported into HTML files via CDN, and the classes are applied to standard HTML elements to give them the styles defined in Bootstrap's CSS file. It can save significant amounts of time when trying to style a webpage and create a professional-looking, responsive layout. It utilizes small amounts of JavaScript to achieve its functionality as well. 

Bootstrap Documentation: https://getbootstrap.com/

# What is React Bootstrap?
React Bootstrap replaces Bootstrap JavaScript (the original bootstrap). It is rebuilt with React. Essentially, it is a collection of React components which we can import into our projects, each of which utilizes many of the CSS classes defined in the original Bootstrap framework.

React Bootstrap Documentation: https://react-bootstrap.netlify.app/

# How do I run this React project?
First, clone the repository. Then, navigate into your project folder, open Terminal, and then run these commands:

`npm install`
<br>`npm run dev`

`npm install` will install all the dependencies and node modules defined in your package.json file.
<br>`npm run dev` is a script which will run your application and make it accessible via your browser.

If you get an error about being unable to find vite, rename the folder you're creating your project in to something simple without special characters or spaces, and run this command: 

`.\node_modules\.bin\vite`
