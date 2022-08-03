import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';

const StyledRoot = styled('div')({
  backgroundColor: '#14161a',
  color: 'white',
  minHeight: '100vh',
});

function App() {
  return (
    <Router>
      <StyledRoot>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>
      </StyledRoot>
    </Router>
  );
}

export default App;
