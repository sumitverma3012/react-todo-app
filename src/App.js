import React, { Component } from 'react';
import TodoContainer from "./containers/TodoContainer";
import './App.css';
import {Container} from "@material-ui/core";
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary";

class App extends Component {

  render() {
    return (
      <Container maxWidth="md">
        <h1 className="child">React TODO App</h1>
          <ErrorBoundary>
            <TodoContainer />
          </ErrorBoundary>
      </Container>
    );
  }
}

export default App;
