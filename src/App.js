import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import error404 from './pages/errors/error404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router> 
          <div>
            <div className="page-header header-filter" filter-color="purple">
              <div className="container">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='*' component={error404} />
                  </Switch>
              </div>
              <footer className="footer ">
                  <div className="container">
                      <div className="copyright pull-right">
                          &copy; Made with <i className="material-icons">favorite</i> by
                          <a href="https://harshbarot.in" target="_blank" rel="noopener noreferrer"> Harsh Barot - technofreak</a>
                      </div>
                  </div>
              </footer>
            </div>
          </div>
        </Router>
      </div>
    ); 
  }
}

export default App;
