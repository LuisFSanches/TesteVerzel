import React from "react";
import { BrowserRouter, Switch, Route, Redirect  } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Update from "./pages/Update/Update.js";


export default function routes() {

  const isAuth = true

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" exact component={Dashboard}/>
          <PrivateRoute path="/dashboard/update/:id" component={Update}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}
