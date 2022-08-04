import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import React from 'react';

const StyledDiv = styled('div')({
  backgroundImage: 'url(./CryptoPricesBanner.jpg)',
  backgroundSize: 'cover',
});

const StyledContainer = styled('Container')({
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '25px',
  justifyContent: 'space-around',
});

const StyledTagline = styled('div')({
  display: 'flex',
  height: '40%',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
});

const Banner = () => {
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledTagline>
          <Typography
            variant='h2'
            style={{
              fontWeight: 'bold',
              marginBotton: '15px',
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
        </StyledTagline>
      </StyledContainer>
    </StyledDiv>
  );
};

export default Banner;
