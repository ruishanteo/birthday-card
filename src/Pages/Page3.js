import { Box, Typography } from "@mui/material";

import page3 from "../Pictures/page3pic.png";

export function Page3() {
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
        hap-pea birthday!
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
      <img src={page3} alt={"pea"} width={"400px"} />
    </Box>
  );
}
