import { Route, Switch } from "react-router-dom";
import Signup from "../Pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>
    </Switch>
  );
};

export default Routes;
