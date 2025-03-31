# What is an SPA?
An SPA is a single page application. Traditionally, when navigating different portions of a website (such as "Home", "Contact" and so forth), each hyperlink you click to navigate to another page requires you to load a whole new page. In an SPA, the entire application is on one webpage. The content is just updated in real time, reducing the number of scenarios in which a page reload is necessary. React's method of rendering content allows us to build SPAs.

## What is React Routing?
Using NPM, we can install a library called React Router which offers us tools to map routes to React components. This allows us to implement navigation in our application.
``npm install react-router-dom``

## What is conditional rendering?
When you use an if-statement in programming, you are causing code to execute conditionally, i.e. underneath a certain condition. Conditional rendering just means we are rendering content when a particular condition is met. React allows us to achieve this with JSX, as JSX allows us to insert JavaScript expressions (such as the ternary operator) into our HTML. Two methods of rendering content conditionall in react include:
- The && operator --> ``&&``
- The ternary operator --> ``? :``

## How do we handle events in React?
In React, we can handle events by creating a function to handle the event, and then passing that function to the event, like this:

const greetMe = () => {
    alert("Hello, friend!");
};
<button onClick={greetMe}>Click me!</button>
