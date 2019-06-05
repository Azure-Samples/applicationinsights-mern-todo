import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserHistory} from "history";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.png";
import { ai } from "./TelemetryService";
const history = createBrowserHistory({ basename: '' });
ai.initialize({ history });

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://localhost:3000">
              <img src={logo} width="30" height="30" alt="https://github.com/microsoft/ApplicationInsights-JS" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
