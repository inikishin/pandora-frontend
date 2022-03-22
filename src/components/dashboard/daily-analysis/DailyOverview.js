import { Box } from '@material-ui/core';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { addLine, convertQuotesForChart } from '../../../utils/chart';

function DailyOverview({ quotes, chartBarsCount }) {
  const quotesData = convertQuotesForChart(quotes.slice(-chartBarsCount), 'datetime', ['open', 'high', 'low', 'close']);
  const lineData = addLine(quotes.slice(-chartBarsCount), 'datetime', 330);

  console.log(lineData);
  const state = {
    series: [{
      type: 'candlestick',
      name: 'candlestick',
      data: quotesData
    },
    {
      type: 'line',
      name: 'line',
      data: lineData
    }],
    options: {
      chart: {
        // type: 'candlestick',
        height: 550
      },
      title: {
        text: 'Chart',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    },
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Chart
        options={state.options}
        series={state.series}
        type="candlestick"
        width="1000"
      />
    </Box>
  );
}

DailyOverview.propTypes = {
  quotes: PropTypes.array,
  chartBarsCount: PropTypes.number,
};

export default DailyOverview;
