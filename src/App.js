import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Home from './pages/Home'
import UpdateTracker from './pages/UpdateTracker'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="Pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/UpdateTracker" element={<UpdateTracker />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
