import "./App.css";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { LoginForm } from "./pages/LoginForm/LoginForm";
import { Main } from "./pages/Main/Main";
import { useGetPosts } from "./shared/hooks";
import { POSTS_URL } from "./shared/projectData";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
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
                    blogPostRoutes={blogPostRoutes}
                >
                    <LoginForm />
                </PublicRoute>
                <PrivateRoute path="/" blogPostRoutes={blogPostRoutes}>
                    <Main postsData={postsData} />
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default App;
