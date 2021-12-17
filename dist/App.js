import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import { Provider } from 'react-redux';
import configureStore from './store';
import context1 from './context1';
const store2 = configureStore();

function App({
  store1,
  parentData
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("p", null, "Edit ", /*#__PURE__*/React.createElement("code", null, "src/App.js"), " and save to reload."), /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn Something new"), /*#__PURE__*/React.createElement(context1.Provider, null, /*#__PURE__*/React.createElement(Provider, {
    store: store2,
    context: context1
  }, /*#__PURE__*/React.createElement(MyComponent, null)))));
}

export default App;