import React from 'react';
import './App.css';
import Header from './header/header';
import Navbar from "./navbar/navbar";
import Message from "./message/message";
import Profile from "./profile/profile";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <div className="container">
                    <Navbar/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/message' component={Message}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
