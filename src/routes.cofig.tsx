/* 
    Routes: Functional Component
*/

import { Redirect, Route, Switch } from "react-router-dom";
// pages - paths
import HomePage from "./app/pages/HomePage/HomePage";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Redirect from='/**' to='/' />
        </Switch>
    );
};

export default Routes;
