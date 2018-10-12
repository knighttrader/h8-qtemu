import React, { Component } from 'react';
import { Home, CreateMeetup, Explore, Login } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <CreateMeetup />
        <Explore />
        <Login />
      </div>
    );
  }
}

export default App;
