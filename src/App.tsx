import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layouts/Layout";
import {RequireAuth} from "./hoc/RequireAuth";
import Registration from "./AuthPage/Registration/Registration";
import Login from "./AuthPage/Login/Login";
import AuthPage from "./AuthPage/AuthPage";
import List from "./pages/List/List";
import {useAuth} from "./store/auth/hooks";

function App() {
    const isLoading = useAuth()

    if(isLoading){
        return <div>Загрузка...</div>
    }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route   element={<AuthPage/>} >
                <Route path='login' element={<Login /> }/>
                <Route path='registration' element={<Registration/> }/>
            </Route>
          <Route  element={<RequireAuth/>}>
            <Route index element={<List /> }/>
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
