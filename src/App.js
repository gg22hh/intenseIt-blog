import { useState } from "react";
import "./App.css";
import {
    Redirect,
    Route,
    Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { LoginForm } from "./pages/LoginForm/LoginForm";
import { Main } from "./pages/Main/Main";
import { useGetPosts } from "./shared/hooks";
import { POSTS_URL } from "./shared/projectData";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
    const [active, setActive] = useState(
        localStorage.getItem("isLogged") === "true"
    );

    const postsData = useGetPosts(POSTS_URL);

    const blogPostRoutes = postsData[0]?.map((item) => {
        return `/blog/${item.id}`;
    });

    return (
        <div className="App">
            <Switch>
                <PublicRoute
                    exact
                    path="/login"
                    active={active}
                    blogPostRoutes={blogPostRoutes}
                >
                    <LoginForm setActive={setActive} />
                </PublicRoute>
                <PrivateRoute
                    path="/"
                    active={active}
                    setActive={setActive}
                    blogPostRoutes={blogPostRoutes}
                >
                    <Main setActive={setActive} postsData={postsData} />
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default App;
