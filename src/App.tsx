import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Main from './pages/Main/Main';
import Friends from './pages/Friends/Friends';
import Films from './pages/Films/Films';
import Places from './pages/Places/Places';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/movies" element={<Films />} />
            <Route path="/places" element={<Places />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

