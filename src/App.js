import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
