import { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography, TextField } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import PropTypes from 'prop-types';

function ProcessingFeaturesCard({ tickersList, handleProcessingFeatures }) {
  const [ticker, setTicker] = useState('');

  const handleSelectTicker = (e) => {
    setTicker(e.target.value);
  };

  const handleProcessingFeaturesButtonClick = () => {
    handleProcessingFeatures(ticker);
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
            Processing features for specified ticker
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
            <SettingsIcon color="primary" />
            <Typography
              color="textPrimary"
              sx={{ pl: 1 }}
              variant="h6"
            >
              Processing features
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
          Выбираем тикер из списка и запускаем обсчет фич по нему. Пока только по одному тикеру, потом расширим фукнционал.
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
          endIcon={<SettingsIcon fontSize="small" />}
          variant="outlined"
          onClick={handleProcessingFeaturesButtonClick}
        >
          Load quotes
        </Button>
      </CardActions>
    </Card>
  );
}

ProcessingFeaturesCard.propTypes = {
  tickersList: PropTypes.array,
  handleProcessingFeatures: PropTypes.func,
};

export default ProcessingFeaturesCard;
