import {Redirect, Route, Switch} from "wouter";
import {HomePage} from "./routes/home";
import {NotFound} from "./routes/404";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" replace />
        </Switch>
    )
}