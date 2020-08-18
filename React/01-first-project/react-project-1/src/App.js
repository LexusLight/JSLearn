import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter,Route} from "react-router-dom"


const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div>
                  <Route path='/dialogs' render={() =>  <Dialogs/>} /> {/*components или render*/}
                  <Route path='/profile' render={() =>  <Profile data={props.data} addMessage={props.addMessage} />}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

//Блаблабла