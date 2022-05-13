import { Switch, Route } from "react-router-dom";
import Events from "../Pages/NewEvent";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup">
        <Signup />
      </Route>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/newEvent">
        <Events />
      </Route>
    </Switch>
  );
};

export default Routes;