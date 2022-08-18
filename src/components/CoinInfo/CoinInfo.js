import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import { HistoricalChart } from '../../config/api';
import { CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartDays } from '../../config/chartDays';
import SelectButton from '../SelectButton/SelectButton';

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  useEffect(() => {
    const fetchHistoricData = async () => {
      const { data } = await axios.get(
        HistoricalChart(coin.id, days, currency)
      );

      setHistoricData(data.prices);
    };
    fetchHistoricData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Montserrat',
    },
  });

  const cryptoName = coin.id.charAt(0).toUpperCase() + coin.id.slice(1);

  ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='container'>
        {!historicData ? (
          <CircularProgress
            style={{
              color: '#6667AB',
            }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <div style={{ height: '100%', width: '100%' }}>
              <Line
                data={{
                  labels: historicData.map((coin) => {
                    let date = new Date(coin[0]);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${
                            (date.getMinutes() < 10 ? '0' : '') +
                            date.getMinutes()
                          } AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                  }),

                  datasets: [
                    {
                      label: `Price ( Past ${days} Days ) in ${currency}`,
                      data: historicData.map((coin) => coin[1]),
                      borderColor: '#6667AB',
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                  plugins: {
                    title: {
                      display: true,
                      text: `${cryptoName}`,
                    },
                  },
                }}
              />
              <div className='buttons'>
                {chartDays.map((day) => (
                  <SelectButton
                    key={day.value}
                    onClick={() => setDays(day.value)}
                    selected={day.value === days}
                  >
                    {day.label}
                  </SelectButton>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
