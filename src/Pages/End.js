import { Box, Button, Typography } from "@mui/material";

export function End() {
  return (
    <Box align="center" variant="text" minHeight="92.5vh">
      <Box height="200px"></Box>
      <Typography
        variant="h3"
        mb={5}
        sx={{
          fontFamily: "monospace",
          fontWeight: "700",
          fontSize: "60px",
          letterSpacing: "5px",
        }}
      >
        Question?
      </Typography>
      <Box mt={5} justifyContent="center" display="flex" flexDirection="row">
        <Button
          component="a"
          href="/birthday-card/#/yes"
          variant="contained"
          sx={{
            minHeight: "50px",
            minWidth: "150px",
            fontFamily: "monospace",
            fontWeight: "500",
            fontSize: "30px",
            letterSpacing: "5px",
          }}
        >
          Yes
        </Button>
        <Box width="50px"></Box>
        <Button
          variant="contained"
          onClick={() => {
            alert("Why not? :((");
          }}
          sx={{
            minHeight: "50px",
            minWidth: "150px",
            fontFamily: "monospace",
            fontWeight: "500",
            fontSize: "30px",
            letterSpacing: "5px",
          }}
        >
          No
        </Button>
      </Box>
    </Box>
  );
}
