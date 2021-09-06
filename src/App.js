import "./App.css";
import { Route, Switch } from "react-router-dom";
import { routes } from "@helpers";
import { Home } from "@components";

function App() {
  return (
    <div>
      <Switch>
        {routes.map((route, i) => (
          <Route {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
