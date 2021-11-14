import React, { Component } from 'react'
//import 'react-select/dist/react-select.css'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import screen from './components/screens/screen'
import {RED, YELLOW, GREEN} from './store/actions/actionTypes';
import './App.scss';

class App extends Component {
  render() {

    const {colorInterval, counter} = this.props;

    let routes = (
      <Switch>
        <Route path="/green" component={screen} colorIndex={3} colorInterval={colorInterval} counter={counter}/>
        <Route path="/yellow" component={screen} colorIndex={0} colorInterval={colorInterval} counter={counter} />
        <Route path="/red" component={screen} colorIndex={1} colorInterval={colorInterval} counter={counter} />
      </Switch>)
    return (
      <div className="App">
          {routes}
        </div>
      );
  }
}

export default withRouter(App);
