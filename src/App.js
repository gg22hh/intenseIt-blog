import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Content } from "./components/Content/Content";
import { LoginForm } from "./components/LoginForm/LoginForm";

function App() {
    const [active, setActive] = useState(localStorage.getItem('isLogged') === 'true');

    return (
        <div className="App">
            {active ? (
                <>
                    <Sidebar setActive={setActive} />
                    <Content />
                </>
            ) : (
                <LoginForm setActive={setActive} />
            )}
        </div>
    );
}

export default App;
