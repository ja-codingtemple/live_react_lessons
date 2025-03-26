WHAT ARE PROPS?

The word prop is an abbreviation for 'properties'. They operate in the same manner as parameters in functions.
Components are technically functions and they can request & receive data through props the same way normal functions can.
Props allow data to be passed from a parent component to a child component.

WHAT IS STATE?

Components in React have a built-in state object. Each component has its own state and the component itself re-renders any time that its state changes.

WHAT IS A HOOK? 

Hooks are special React functions that allow a developer to 'hook into' React features. The two most commonly used hooks are:
- useState
- useEffect

WHAT IS useState?:
useState is a React hook that allows a component to have state. It's how state is utilized and it returns an array with a reference to the state value, as well as a function to set its value.

WHAT IS useEffect?:
useEffect is a React hook that enables you to create 'side-effects' in a component. It runs once upon the component's initial render. useEffect also accepts a dependency array in which you can define various dependencies for the side-effect. If the value or state of anything in the dependency array changes, the side-effect will be applied again.