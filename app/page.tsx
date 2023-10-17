import { Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Home() {
  return (
    <Grid2 sx={{}}>
      <Button variant="contained">Hellow world</Button>
      <Button variant="outlined">Hellow world</Button>
      <Typography variant="h1">The very best of our Selections</Typography>
      <Typography variant="h2">The very best of our Selections</Typography>
      <Typography variant="h3">The very best of our Selections</Typography>
      <Typography variant="h5">The very best of our Selections</Typography>
      <Typography variant="h6">The very best of our Selections</Typography>
    </Grid2>
  );
}
