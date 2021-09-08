import { Route, Switch } from "react-router-dom";
import { routes } from "helpers";
import "assets/css/App.css";
function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route, i) => (
          <Route {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
