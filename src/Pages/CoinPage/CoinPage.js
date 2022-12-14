import {
  createTheme,
  LinearProgress,
  ThemeProvider,
  Typography,
} from '@mui/material';
import axios from 'axios';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinInfo from '../../components/CoinInfo/CoinInfo';
import { SingleCoin } from '../../config/api';
import { CryptoState } from '../../CryptoContext';
import { numberWithCommas } from '../../components/Banner/Carousel';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    };
    fetchCoin();
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Montserrat',
    },
  });

  if (!coin) return <LinearProgress style={{ backgroundColor: '#6667AB' }} />;

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='container'>
        <div className='sidebar'>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height='200'
            style={{ marginBottom: 20 }}
          />
          <Typography
            variant='h3'
            style={{
              fontWeight: 'bold',
              marginBottom: 20,
              fontFamily: 'Montserrat',
            }}
          >
            {coin?.name}
          </Typography>
          <Typography variant='subtitle1' className='description'>
            {parse(String(coin?.description.en.split('. ')[0]))}.
          </Typography>
          <div className='marketData'>
            <span style={{ display: 'flex' }}>
              <Typography variant='h5' className='heading'>
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant='h5' style={{ fontFamily: 'Montserrat' }}>
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: 'flex' }}>
              <Typography variant='h5' className='heading'>
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant='h5' style={{ fontFamily: 'Montserrat' }}>
                {symbol}{' '}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: 'flex' }}>
              <Typography variant='h5' className='heading'>
                Market Cap:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant='h5' style={{ fontFamily: 'Montserrat' }}>
                {symbol}{' '}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </Typography>
            </span>
          </div>
        </div>
        <CoinInfo coin={coin} />
      </div>
    </ThemeProvider>
  );
};

export default CoinPage;
