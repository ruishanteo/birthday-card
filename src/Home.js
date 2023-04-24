import { Box, Button, Typography } from "@mui/material";

import CakeIcon from "@mui/icons-material/Cake";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import CelebrationIcon from "@mui/icons-material/Celebration";

import page1 from "./Pictures/logo-placeholder.png";
import page2 from "./Pictures/logo-placeholder.png";
import page3 from "./Pictures/logo-placeholder.png";

export function Home() {
  return (
    <Box align="center" variant="text" minHeight="56.4vw">
      <Box height="120px"></Box>
      <Box>
        <CakeIcon sx={{ fontSize: 90, marginBottom: 2 }}></CakeIcon>
        <Typography
          mb={5}
          variant="h2"
          sx={{ fontFamily: "monospace", letterSpacing: 10, fontWeight: 700 }}
        >
          HAPPY BIRTHDAY
        </Typography>

        <Button component="a" href="/#/page1">
          <img src={page1} alt={"pg1"} width={"100px"} />
        </Button>
        <Button component="a" href="/#/page2">
          <img src={page2} alt={"pg2"} width={"100px"} />
        </Button>
        <Button component="a" href="/#/page3">
          <img src={page3} alt={"pg3"} width={"100px"} />
        </Button>

        <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
          pick one!
        </Typography>
      </Box>
      <Box height="130px"></Box>
      <Box display="flex" flexDirection="row">
        <Box width="50px"></Box>
        <Box align="left">
          <Button component="a" href="/#/pictures">
            <CameraRollIcon
              sx={{ color: "black", fontSize: 90 }}
            ></CameraRollIcon>
          </Button>
        </Box>
      </Box>
      <Box height="200px"></Box>
      <Box>
        <Typography sx={{ fontFamily: "monospace" }}>
          you have reached the end
        </Typography>
        <Button component="a" href="/#/end">
          <CelebrationIcon
            sx={{ color: "black", fontSize: 50 }}
          ></CelebrationIcon>
        </Button>
      </Box>
    </Box>
  );
}
