import { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography, TextField } from '@material-ui/core';
import DownloadIcon from '../../../icons/Download';
import PropTypes from 'prop-types';

function LoadQuotesCard({ tickersList, handleLoadQuotes }) {
  const [ticker, setTicker] = useState('');

  const handleSelectTicker = (e) => {
    console.log(e);
    setTicker(e.target.value);
  };

  const handleLoadQuotesButtonClick = () => {
    handleLoadQuotes(ticker);
  };

  return (
    <Card>
      <CardHeader
        disableTypography
        subheader={(
          <Typography
            color="textPrimary"
            variant="h6"
          >
            Load quotes for specified ticker
          </Typography>
        )}
        title={(
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              pb: 2
            }}
          >
            <DownloadIcon color="primary" />
            <Typography
              color="textPrimary"
              sx={{ pl: 1 }}
              variant="h6"
            >
              Load quotes
            </Typography>
          </Box>
        )}
        sx={{ pb: 0 }}
      />
      <CardContent sx={{ pt: '8px' }}>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Выбираем тикер из списка и грузим котировки по нему. Пока только по одному тикеру, потом расширим фукнционал.
        </Typography>
        <TextField
          fullWidth
          label="Ticker"
          name="ticker"
          onChange={handleSelectTicker}
          select
          SelectProps={{ native: true }}
          value={ticker}
          variant="outlined"
          sx={{ m: 2, ml: 0 }}
        >
          {tickersList.map((item) => (
            <option key={item.id} value={item.id}>{item.code}</option>
          ))}
        </TextField>
      </CardContent>
      <CardActions
        sx={{
          backgroundColor: 'background.default',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<DownloadIcon fontSize="small" />}
          variant="outlined"
          onClick={handleLoadQuotesButtonClick}
        >
          Load quotes
        </Button>
      </CardActions>
    </Card>
  );
}

LoadQuotesCard.propTypes = {
  tickersList: PropTypes.array,
  handleLoadQuotes: PropTypes.func,
};

export default LoadQuotesCard;
