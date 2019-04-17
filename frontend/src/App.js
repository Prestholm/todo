import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./containers/TODO/Todo";
import MyTodo from "./containers/MyTodo/MyTodo";
import Notfound from "./components/notFound";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos/">My Lists</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              We can add a homepage or something here. If not we could just
              redirect to todos.
            </Route>
            <Route exact path="/todos" component={Todo} />
            <Route
              exact
              path="/todos/:id/todoItems/:todoItemId/"
              component={MyTodo}
            />
            <Route path="/todos/:id/todoItems/" component={MyTodo} />

            <Route component={Notfound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
