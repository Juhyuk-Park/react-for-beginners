import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import { element } from "prop-types";
function App() {
  return (
    <Router>
      <Switch>
        l
        <Route
          path={process.env.PUBLIC_URL + "/about"}
          component={About}
        ></Route>
        <Route
          path={process.env.PUBLIC_URL + "/movie/:id"}
          component={Detail}
        ></Route>
        <Route path={process.env.PUBLIC_URL + "/"} component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
