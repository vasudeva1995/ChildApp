import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import { Provider } from 'react-redux';
import configureStore from './store';
import context1 from './context1';
import {Button,Input} from 'antd';

const store2 = configureStore();
function App({store1,parentData}) {
  return (
    <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
Learn Something new 99999999999999999
        </a>
        <context1.Provider>
        <Provider store = {store2} context={context1}>
          <MyComponent/>
        </Provider>
        </context1.Provider>
      </header>
    </div>
  );
}

export default App;
