/* 
    Routes: Functional Component
*/

import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "./app/pages/AboutPage/AboutPage";
// pages - paths
import HomePage from "./app/pages/HomePage/HomePage";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Redirect from='/**' to='/' />
        </Switch>
    );
};

export default Routes;
