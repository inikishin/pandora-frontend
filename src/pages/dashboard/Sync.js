import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import {
  OverviewInbox,
  OverviewLatestTransactions,
  OverviewTotalBalance,
} from '../../components/dashboard/overview';
import LoadQuotesCard from '../../components/dashboard/sync/LoadQuotesCard';
import ProcessingFeaturesCard from '../../components/dashboard/sync/ProcessingFeaturesCard';
import SyncSiteDataCard from '../../components/dashboard/sync/SyncSiteDataCard';

import useSettings from '../../hooks/useSettings';
import PlusIcon from '../../icons/Plus';
import gtm from '../../lib/gtm';

import { getTickers, postLoadQuotes, postProcessingFeatures, getSyncConfig, postSync } from '../../services/slices/quotes';

const Overview = () => {
  const { settings } = useSettings();
  const dispatch = useDispatch();
  const { tickers, quotes } = useSelector((store) => ({ ...store.quotes }));

  useEffect(() => {
    gtm.push({ event: 'page_view' });
    dispatch(getTickers());
    dispatch(getSyncConfig());
  }, []);

  const handleLoadQuotes = (tickerId) => {
    dispatch(postLoadQuotes(tickerId));
  };

  const handleProcessingFeatures = (tickerId) => {
    dispatch(postProcessingFeatures(tickerId));
  };

  const handleSyncSites = (syncParams) => {
    console.log(syncParams);
    dispatch(postSync(syncParams));
  };

  return (
    <>
      <Helmet>
        <title>Dashboard: Sync | Pandora</title>
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
            spacing={3}
          >
            <Grid
              alignItems="center"
              container
              justifyContent="space-between"
              spacing={3}
              item
              xs={12}
            >
              <Grid item>
                <Typography
                  color="textSecondary"
                  variant="overline"
                >
                  Sync
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="h5"
                >
                  Good Morning, Ilya
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Here&apos;s what&apos;s happening with your projects
                  today
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  startIcon={<PlusIcon fontSize="small" />}
                  variant="contained"
                >
                  New Transaction
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <LoadQuotesCard tickersList={tickers.list} handleLoadQuotes={handleLoadQuotes} />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <ProcessingFeaturesCard tickersList={tickers.list} handleProcessingFeatures={handleProcessingFeatures} />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <SyncSiteDataCard syncConfig={quotes.syncConfig} handleSyncSites={handleSyncSites} />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <OverviewTotalBalance />
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <OverviewLatestTransactions />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <OverviewInbox />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Overview;
