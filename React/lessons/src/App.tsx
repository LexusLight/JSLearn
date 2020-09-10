import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Hook1 from "./lessons/hooks/hook1";


const App = () => {
  return (
      <div>
          <a href={'/hook1'}>hook 1</a>
          <BrowserRouter>
              <Route path={'/hook1'}><Hook1/></Route>

          </BrowserRouter>
      </div>
  );
}

export default App;
