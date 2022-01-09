import Main from './pages/Main';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Login from './pages/Login';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
