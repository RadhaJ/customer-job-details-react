import React, { Component } from 'react';
import customer from './customer.png';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src={customer} className="App-logo" alt="logo" />
          <h1 className="App-title">Customer Job Details App</h1>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/listCustomers"/>
                )}/>
                 <Route exact path='/listCustomers' component={Customers} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
