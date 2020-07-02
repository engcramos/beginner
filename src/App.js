import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Home from './pages/Home'



function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          
        </Switch>
      </Router>
      <GlobalStyle/>
    </AppProvider>
  );
}

export default App;
