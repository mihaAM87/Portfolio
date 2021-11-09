import React, { Component } from 'react'
//import 'react-select/dist/react-select.css'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import FolgerContentList from './components/folgerContent/folgerContentList'
import './App.scss';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/source/source.js" component={FolgerContentList} />
      </Switch>)
    return (
    <div className="App">
      {routes}
    </div>);
  }
}

export default withRouter(App);
