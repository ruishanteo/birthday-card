import { Alert, Box, Button, Typography } from "@mui/material";

export function End() {
  return (
    <Box align="center" variant="text" height="705px">
      <Box height="200px"></Box>
      <Button variant="contained">Yes</Button>
      <Button
        variant="contained"
        onClick={() => {
          alert("This is an error alert — check it out!");
        }}
      >
        No
      </Button>
      <Typography mt={8}>Text</Typography>
    </Box>
  );
}
