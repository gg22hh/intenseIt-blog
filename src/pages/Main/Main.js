import React from "react";
import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";

export const Main = ({ setActive }) => {
    return (
        <div>
            <Sidebar setActive={setActive} />
            <Content />
        </div>
    );
};
