import { Box, Typography } from "@mui/material";

import page2 from "../Pictures/page2pic.png";

export function Page2() {
  return (
    <Box align="center" variant="text" minHeight="56.4vw">
      <Box height="160px"></Box>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "monospace",
          fontWeight: "700",
          fontSize: "40px",
          letterSpacing: "5px",
        }}
      >
        have an otterly amazing birthday!
      </Typography>
      <Typography
        mt={5}
        sx={{
          fontFamily: "monospace",
          fontWeight: "300",
          fontSize: "25px",
          letterSpacing: "5px",
        }}
      >
        text
      </Typography>
      <img src={page2} alt={"otter"} width={"400px"} />
    </Box>
  );
}
