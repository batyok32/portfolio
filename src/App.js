import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { mainRoutes } from "./routes";

function App() {
    return (
        <Router>
            <Switch>
                {mainRoutes.map((route) => (
                    <Route key={route.path} {...route}>
                        <Layout>{route.comp}</Layout>
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
