import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import Hook1 from "./lessons/hooks/hook1";
import Event from "./lessons/base/evenst";
import Conditional_render from "./lessons/base/conditional_rendering";
import Variable_element from "./lessons/base/element_in_variable";
import Lists_and_keys from "./lessons/base/lists_and_keys";
import Forms from "./lessons/base/forms";
import Temperature from "./lessons/base/temperature";


const App = () => {
  return (
      <div>
          <BrowserRouter>
          <ul>
              <li><NavLink to={'/hook1'}>Хук useState</NavLink></li>
              <li><NavLink to={'/base1'}>Ловля событий</NavLink></li>
              <li><NavLink to={'/base2'}>Условный рендер</NavLink></li>
              <li><NavLink to={'/base3'}>Элемент-переменная + интерфейсы + классавая компонента</NavLink></li>
              <li><NavLink to={'/base4'}>Листы,ключи,Map</NavLink></li>
              <li><NavLink to={'/base5'}>Формы</NavLink></li>
              <li><NavLink to={'/base6'}>Температура</NavLink></li>

          </ul>

              <Route path={'/hook1'}><Hook1/></Route>
              <Route path={'/base1'}><Event/></Route>
              <Route path={'/base2'}><Conditional_render/></Route>
              <Route path={'/base3'}><Variable_element/></Route>
              <Route path={'/base4'}><Lists_and_keys/></Route>
              <Route path={'/base5'}><Forms/></Route>
              <Route path={'/base6'}><Temperature/></Route>

          </BrowserRouter>
      </div>
  );
}

export default App;
