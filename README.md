## What is React?

React is a JavaScript library developed by Facebook for creating user interfaces. It allows developers to create their own reusable UI components.

React uses something called the Virtual DOM which is essentially a virtual copy of the actual DOM (Document Object Model). When attempting to update the DOM, it will update the Virtual DOM first and then change the actual DOM in an efficient manner later, changing only what is necessary.

## What is JSX?

JSX (JavaScript XML) is is a syntax extension for JavaScript that allows developers to write HTML and JavaScript in the same document.
<br>JSX allows you to embed JavaScript expressions inside of HTML within the boundaries of curly braces {}

Example:
<p>Customer Name: {name}</p>

## What are components?

From the official documentation, React components split the UI into independent, reusable pieces.
<br>They are essentially JavaScript functions that accept input (props) and return React elements which describe what should appear on the screen.
<br>You can think of them as effectively being your own custom HTML elements that also have the capacity to include more complicated JavaScript logic.
<br>Components can be nested inside of each other the same way normal HTML elements can.

## What is the component lifecycle?

Components in React have a lifecycle that begins upon creation and ends upon removal.

<br>The three phases are:
<br>- Mounting: This is when the component is created and rendered in the DOM.
<br>- Updating: This is when the component updates due to a state or prop change.
<br>- Unmounting: This is when the component is removed from the DOM.

## How do I create & run a React project?

There are a variety of ways to create React projects. The command we recommend using at CodingTemple is below:

`npx create-vite myproject --template react`

After running this command in your terminal, your project structure should be created for you.
<br>From there, you must navigate into your folder, and then run these commands:

`npm install`
<br>`npm run dev`

`npm install` will install all the dependencies and node modules defined in your package.json file.
<br>`npm run dev` is a script which will run your application and make it accessible via your browser.

If you get an error about being unable to find vite, rename the folder you're creating your project in to something simple without special characters or spaces, and run this command: 

`.\node_modules\.bin\vite`
