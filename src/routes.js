import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Update from "./pages/Update/Update.js";

export default function routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = localStorage.getItem("isAuth");

    return (
      <Route
        {...rest}
        render={(props) =>
          auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/dashboard/update/:id" component={Update} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
