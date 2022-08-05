import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layouts/Layout";
import {RequireAuth} from "./hoc/RequireAuth";
import Registration from "./AuthPage/Registration/Registration";
import Login from "./AuthPage/Login/Login";
import AuthPage from "./AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route  element={<RequireAuth/>}>
            <Route path='list'/>
          </Route>
            <Route   element={<AuthPage/>} >
                <Route path='login' element={<Login /> }/>
                <Route path='registration' element={<Registration/> }/>
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
