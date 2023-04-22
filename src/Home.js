import { Box, Button, Typography } from "@mui/material";

import CakeIcon from "@mui/icons-material/Cake";

import page1 from "./Pictures/logo-placeholder.png";
import page2 from "./Pictures/logo-placeholder.png";
import page3 from "./Pictures/logo-placeholder.png";

export function Home() {
  return (
    <Box align="center" variant="text" height="1000px">
      <Box height="200px"></Box>

      <Typography
        mb={5}
        variant="h2"
        sx={{ fontFamily: "monospace", letterSpacing: 5 }}
      >
        HAPPY BIRTHDAY
      </Typography>

      <Button component="a" href="/page1">
        <img src={page1} width={"100px"} />
      </Button>
      <Button component="a" href="/page2">
        <img src={page2} width={"100px"} />
      </Button>
      <Button component="a" href="/page3">
        <img src={page3} width={"100px"} />
      </Button>

      <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
        pick one!
      </Typography>
    </Box>
  );
}
