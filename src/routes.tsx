import { Route, Routes } from "react-router"
import App from "./App"
import Builder from "./components/builder/builder";

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/builder" element={<Builder />} />
        </Routes>
    )
};

export default RouteList;