import React from 'react';
import TabBar from "./TabBar"
import Detail from "./pages/Detail"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route component={TabBar} />
      </Switch>
    </Router>

  );
}

export default App;
