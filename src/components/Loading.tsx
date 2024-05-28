import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';

export default function Loading() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: "50vh" }}>
      <CircularProgress />
    </Grid>
  );
}