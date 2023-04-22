import { Box, Typography } from "@mui/material";

import page1 from "../Pictures/page1pic.png";

export function Page1() {
  return (
    <Box align="center" variant="text" height="705px">
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
        it's paw-ty time!
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
      <img src={page1} alt={"paw"} width={"400px"} />
    </Box>
  );
}
