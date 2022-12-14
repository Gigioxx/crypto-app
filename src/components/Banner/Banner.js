import { Container, Typography } from '@mui/material';

import React from 'react';
import Carousel from './Carousel';

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(./CryptoPricesBanner.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <Container
        style={{
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 25,
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h2'
            style={{
              fontWeight: 'bold',
              marginBotton: 15,
              fontFamily: 'Montserrat',
            }}
          >
            Crypto Prices
          </Typography>
          <Typography
            variant='subtitle2'
            style={{
              color: 'lightgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
            }}
          >
            All the cryptocurrency data in one place
          </Typography>
        </div>
        <Carousel></Carousel>
      </Container>
    </div>
  );
};

export default Banner;
