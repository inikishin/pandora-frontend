import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Link, TextField,
  Typography
} from '@material-ui/core';
import DatePicker from '@material-ui/lab/DatePicker';
import DailyAnalysisPreview from '../../components/dashboard/daily-analysis/DailyAnalysisPreview';
import useSettings from '../../hooks/useSettings';
import ChevronRightIcon from '../../icons/ChevronRight';
import gtm from '../../lib/gtm';
import { getTickers, getTimeframes, getQuotes } from '../../services/slices/quotes';
import { useDispatch, useSelector } from 'react-redux';

const DailyAnalysis = () => {
  const { settings } = useSettings();
  const dispatch = useDispatch();
  const { tickers, quotes, timeframes } = useSelector((store) => ({ ...store.quotes }));

  const [ticker, setTicker] = useState('');
  const [analysisDate, setAnalysisDate] = useState(Date.now());

  console.log('State:', ticker, analysisDate);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
    dispatch(getTickers());
    dispatch(getTimeframes());
  }, []);

  const handleSelectTicker = (e) => {
    setTicker(e.target.value);
  };

  const handleDateChange = (e) => {
    setAnalysisDate(e);
  };

  const handleAnalysisClick = () => {
    if (ticker && analysisDate) {
      const tf = timeframes.list.find((item) => (item.code === 'd1'));
      dispatch(getQuotes(ticker, tf.id));
    } else {
      console.warn('Empty ticker or analysis date');
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard: Daily Analysis | Pandora</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Daily Analysis
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Daily Analysis
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
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
                {tickers.list.map((item) => (
                  <option key={item.id} value={item.id}>{item.code}</option>
                ))}
              </TextField>
              <DatePicker
                label="Analysis date"
                value={analysisDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  sx={{ m: 1 }}
                  variant="contained"
                  onClick={handleAnalysisClick}
                >
                  Analysis
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
          <DailyAnalysisPreview data={quotes} />
        </Container>
      </Box>
    </>
  );
};

export default DailyAnalysis;
