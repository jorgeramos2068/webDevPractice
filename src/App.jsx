import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Steam from './pages/Steam';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steam" element={<Steam />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
