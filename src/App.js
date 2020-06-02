import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import './style/App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HashRouter basename='/trivia-react-redux/'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/game" component={Questions} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/ranking" component={Ranking} />
          </Switch>
        </HashRouter>
      </BrowserRouter >
    );
  }
}

export default App;
