import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { NoMatch } from "../../pages/NoMatch/NoMatch";
import { APP_ROUTES } from "../../shared/projectData";

export const PrivateRoute = ({
    path,
    exact = false,
    children,
    active,
    blogPostsRoutes,
}) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={({ location }) => {
                const allRoutes = [...APP_ROUTES, ...blogPostsRoutes];
                const isRouteExists = allRoutes.some(
                    (route) => route === location.pathname
                );
                if (!isRouteExists) return <NoMatch />;

                if (active) return children;
                return <Redirect to="/login" />;
            }}
        />
    );
};
