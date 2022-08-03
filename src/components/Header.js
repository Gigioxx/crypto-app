// import { styled } from '@mui/material/styles';
import {
  AppBar,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const titleTheme = createTheme({
    typography: {
      title: {
        flex: 1,
        color: '#6667AB',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '20px',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <ThemeProvider theme={titleTheme}>
              <Typography variant='title' onClick={() => navigate(`/`)}>
                Crypto App
              </Typography>
            </ThemeProvider>
            <Select
              variant='outlined'
              style={{ width: 100, height: 40, marginRight: 15 }}
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
