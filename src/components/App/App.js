import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
