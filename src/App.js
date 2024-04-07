import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Route
          path={process.env.PUBLIC_URL + "/movie/:id"}
          component={Detail}
        />
        <Route path={process.env.PUBLIC_URL + "/"} component={Home} />
      </Switch>
    </>
  );
}

export default App;
