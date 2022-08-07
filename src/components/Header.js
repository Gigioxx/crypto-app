import {
  AppBar,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState() || {};

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography
              variant='h2'
              style={{
                flex: 1,
                color: '#6667AB',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '20px',
              }}
              onClick={() => navigate(`/`)}
            >
              Crypto Prices
            </Typography>

            <Select
              variant='outlined'
              style={{ width: 100, height: 40, marginRight: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'CLP'}>CLP</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
