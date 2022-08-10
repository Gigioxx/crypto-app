import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage/CoinPage';
import Homepage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: '#14161a',
          color: 'white',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
