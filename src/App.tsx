import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import './config/i18n';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default App
