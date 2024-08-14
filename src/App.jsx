
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login.jsx";


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />

            </Routes>
        </>
    );
};

export default App;