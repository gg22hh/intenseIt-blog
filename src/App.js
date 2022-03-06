import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Content } from './components/Content/Content';

function App() {
    return (
        <div className="App">
            <Sidebar />
			<Content />
        </div>
    );
}

export default App;
