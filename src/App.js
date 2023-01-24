// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Loading from './components/Loading';

import React, { Component } from 'react'

export class App extends Component {
  apikey=process.env.REACT_APP_API_KEY;
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route
              exact path="/"
              element={<News key={"genral"} apikey={this.apikey} country="us" category="general"></News>}
            />
            <Route
              path="/sports"
              element={<News key={"sports"} apikey={this.apikey} country="us" category="sports"></News>}
            />
            <Route
              path="business"
              element={<News key={"business"} apikey={this.apikey} country="us" category="business"></News>}
            />
            <Route
              path="/health"
              element={<News key={"health"} apikey={this.apikey} country="us" category="health"></News>}
            />
            <Route
              path="/science"
              element={<News key={"science"} apikey={this.apikey} country="us" category="science"></News>}
            />
            <Route
              path="*"
              element={
                <div>
                  <center>Page Not Found</center>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App

