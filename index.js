import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

// old way
// const heading = React.createElement("div", { id: "parent" }, [
// React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hello"),
// ]),
// React.createElement("div", { id: "child2" }, [
//     React.createElement("h4", {}, "React nested"),
// ]),
// ]);
// React element => javascript object => html structure


// console.log(heading,"createReactElement")

const text = "Hello from JSX ....." // javascript variable

// new way writing the react element

const jsxElement = <div>
    <h1>{text}</h1>
    </div> 
// embedding javascript within HTML element is called jsx 

// jsx element => ReactElement => javascript object => html

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);