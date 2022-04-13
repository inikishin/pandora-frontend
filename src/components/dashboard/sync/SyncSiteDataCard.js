import { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography, TextField } from '@material-ui/core';
import UploadIcon from '../../../icons/Upload';
import PropTypes from 'prop-types';

function SyncSiteDataCard({ syncConfig, handleSyncSites }) {
  const [syncParams, setSyncParams] = useState({ target: '', target_object: '' });

  const handleSelectTarget = (e) => {
    setSyncParams({ ...syncParams, target: e.target.value });
  };

  const handleSelectTargetObject = (e) => {
    setSyncParams({ ...syncParams, target_object: e.target.value });
  };

  const handleLoadQuotesButtonClick = () => {
    handleSyncSites(syncParams);
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
            Sync selected sites data
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
            <UploadIcon color="primary" />
            <Typography
              color="textPrimary"
              sx={{ pl: 1 }}
              variant="h6"
            >
              Sync sites
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
          Выбираем сайт, выбираем объект и синхронизируем. Потом добавить больше вариантов.
        </Typography>
        <TextField
          fullWidth
          label="Target"
          name="target"
          onChange={handleSelectTarget}
          select
          SelectProps={{ native: true }}
          value={syncParams.target}
          variant="outlined"
          sx={{ m: 2, ml: 0 }}
        >
          {Object.keys(syncConfig).map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Target object"
          name="target_object"
          onChange={handleSelectTargetObject}
          select
          SelectProps={{ native: true }}
          value={syncParams.target_object}
          variant="outlined"
          sx={{ m: 2, ml: 0 }}
        >
          {syncConfig[syncParams.target] && Object.keys(syncConfig[syncParams.target].objects).map((item) => (
            <option key={item} value={item}>{item}</option>
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
          endIcon={<UploadIcon fontSize="small" />}
          variant="outlined"
          onClick={handleLoadQuotesButtonClick}
        >
          Sync
        </Button>
      </CardActions>
    </Card>
  );
}

SyncSiteDataCard.propTypes = {
  syncConfig: PropTypes.object,
  handleSyncSites: PropTypes.func,
};

export default SyncSiteDataCard;
