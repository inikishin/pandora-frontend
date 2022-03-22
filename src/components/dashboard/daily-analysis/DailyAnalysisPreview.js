import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import Logo from '../../Logo';
import Scrollbar from '../../Scrollbar';
import DailyOverview from './DailyOverview';

function DailyAnalysisPreview({ data }) {
  console.log(data);

  if (data.isLoading) {
    return (
      <Paper>
        <Box
          sx={{
            minWidth: 800,
            p: 6
          }}
        >
          <Typography variant="h3">Loading data...</Typography>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper>
      <Scrollbar>
        <Box
          sx={{
            minWidth: 800,
            p: 6
          }}
        >
          <Grid
            container
            justifyContent="space-between"
          >
            <Grid item>
              <Logo />
              <Typography
                color="textPrimary"
                variant="h6"
              >
                www.pandoratradigsolutions.com
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="right"
                color="textPrimary"
                variant="h4"
              >
                Daily analysis for
              </Typography>
              <Typography
                align="right"
                color="textPrimary"
                variant="subtitle2"
              >
                {`Общее количество котировок: ${data.list.length}`}
              </Typography>
            </Grid>
          </Grid>
          <DailyOverview quotes={data.list} chartBarsCount={100} />
          <Box sx={{ my: 4 }}>
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  Street King William, 123
                  <br />
                  Level 2, C, 442456
                  <br />
                  San Francisco, CA, USA
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  Company No. 4675933
                  <br />
                  EU VAT No. 949 67545 45
                  <br />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="right"
                  color="textPrimary"
                  variant="body2"
                >
                  accounts@devias.io
                  <br />
                  (+40) 652 3456 23
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ my: 4 }}>
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="subtitle2"
                >
                  Due date
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  dd MMM yyyy
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="subtitle2"
                >
                  Date of issue
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  dd MMM yyyy
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="subtitle2"
                >
                  Number
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  12345
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ my: 4 }}>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="subtitle2"
            >
              Billed to
            </Typography>
            <Typography
              color="textPrimary"
              variant="body2"
            >
              invoice.customer.name
              <br />
              invoice.customer.company
              <br />
              nvoice.customer.taxId
              <br />
              invoice.customer.address
            </Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Description
                </TableCell>
                <TableCell />
                <TableCell align="right">
                  Unit Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Subtotal
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  123
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Taxes
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  4567
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Total
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  567
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box sx={{ mt: 2 }}>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Notes
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Please make sure you have the right bank registration number
              as I
              had issues before and make sure you guys cover transfer
              expenses.
            </Typography>
          </Box>
        </Box>
      </Scrollbar>
    </Paper>
  );
}

DailyAnalysisPreview.propTypes = {
  data: PropTypes.object
};

export default DailyAnalysisPreview;
