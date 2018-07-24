import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Home from 'pages/Home';

import 'styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main className="main">
            <Route exact path="/" component={Home} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
