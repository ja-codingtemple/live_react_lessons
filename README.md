--------------------------------

WHAT IS REACT?

React is a JavaScript library developed by Facebook for creating user interfaces.
<br>
It allows developers to create their own reusable UI components.
React uses something called the Virtual DOM which is essentially a virtual copy of the actual DOM (Document Object Model).
When attempting to update the DOM, it will update the Virtual DOM first and then change the actual DOM in an efficient manner later, changing only what is necessary.

--------------------------------

What IS JSX?

JSX (JavaScript XML) is is a syntax extension for JavaScript that allows developers to write HTML and JavaScript in the same document.
JSX allows you to embed JavaScript expressions inside of HTML within the boundaries of curly braces {}

Example:
<p>Customer Name: {name}</p>

--------------------------------

WHAT ARE COMPONENTS?

From the official documentation, React components split the UI into independent, reusable pieces.
They are essentially JavaScript functions that accept input (props) and return React elements which describe what should appear on the screen.
You can think of them as effectively being your own custom HTML elements that also have the capacity to include more complicated JavaScript logic.
Components can be nested inside of each other the same way normal HTML elements can.

--------------------------------

WHAT IS THE COMPONENT LIFECYCLE?

Components in React have a lifecycle that begins upon creation and ends upon removal.
The three phases are:
- Mounting: This is when the component is created and rendered in the DOM.
- Updating: This is when the component updates due to a state or prop change.
- Unmounting: This is when the component is removed from the DOM.

--------------------------------

HOW DO I CREATE & RUN A REACT PROJECT?

There are a variety of ways to create React projects. The command we recommend using at CodingTemple is below:

npx create-vite myproject --template react

After running this command in your terminal, your project structure should be created for you.
From there, you must navigate into your folder, and then run these commands:

npm install
npm run dev

npm install will install all the dependencies and node modules defined in your package.json file.
npm run dev is a script which will run your application and make it accessible via your browser.

If you get an error about being unable to find vite, rename the folder you're creating your project in to something simple without special characters or spaces.
Then, run this command: .\node_modules\.bin\vite
