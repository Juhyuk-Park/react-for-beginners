import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
function App() {
  return (
    <Router>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
        <Route
          path={process.env.PUBLIC_URL + "/movie/:id"}
          element={<Detail />}
        ></Route>
        <Route
          path={process.env.PUBLIC_URL + "/about"}
          element={<About />}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
