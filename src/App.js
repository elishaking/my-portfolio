import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Landing from './components/routes/Landing';
import About from './components/routes/About';
import Projects from './components/routes/Projects';

function App() {
  return (
    <Router>
      <Route path="/" component={Landing} exact />
      <Route path="/about" component={About} exact />
      <Route path="/projects" component={Projects} exact />
    </Router>
  );
}

export default App;
