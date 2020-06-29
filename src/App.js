import React from 'react';
import './App.css';
import Models from './components/models/models';
import { Route } from 'react-router';
import DetailPage from './components/DetailPage/DetailPage';

function App(props) {
  return (
    <div className="App">
      <Route path='/' exact component={Models} />
      <Route path={'/:userId'} exact render={(props) => <DetailPage {...props} /> } />
    </div>
  );
}

export default App;
