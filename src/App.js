import { useState } from "react";
import "./App.css";
import {
    Redirect,
    Route,
    Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { LoginForm } from "./pages/LoginForm/LoginForm";
import { Main } from "./pages/Main/Main";

function App() {
    const [active, setActive] = useState(
        localStorage.getItem("isLogged") === "true"
    );

    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    {active ? (
                        <Redirect to="/blog" />
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route
                    exact
                    path="/login"
                    render={() => {
                        if (active) return <Redirect to="/blog" />;
                        return <LoginForm setActive={setActive} />;
                    }}
                />
                <Route
                    path="/"
                    render={() => {
                        if (!active) return <Redirect to="/login" />;
                        return <Main setActive={setActive} />;
                    }}
                />
            </Switch>
        </div>
    );
}

export default App;
