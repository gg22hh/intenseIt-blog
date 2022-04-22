import React from "react";
import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";

export const Main = ({ setActive, postsData }) => {
    return (
        <div>
            <Sidebar setActive={setActive} />
            <Content postsData={postsData} />
        </div>
    );
};
