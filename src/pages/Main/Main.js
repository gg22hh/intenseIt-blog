import React from "react";
import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";

export const Main = ({ postsData }) => {
    return (
        <div>
            <Sidebar />
            <Content postsData={postsData} />
        </div>
    );
};
