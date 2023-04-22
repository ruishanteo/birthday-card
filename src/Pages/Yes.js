import { Box, Typography } from "@mui/material";

export function Yes() {
  return (
    <Box align="center" variant="text" height="705px">
      <Box height="200px"></Box>
      <Typography
        variant="h5"
        sx={{
          minHeight: "50px",
          minWidth: "150px",
          fontFamily: "monospace",
          fontWeight: "700",
          fontSize: "80px",
          letterSpacing: "5px",
        }}
      >
        yay!
      </Typography>
    </Box>
  );
}
