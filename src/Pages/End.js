import { Box, Button, Typography } from "@mui/material";

export function End() {
  return (
    <Box align="center" variant="text" height="705px">
      <Box height="200px"></Box>
      <Typography variant="h3" mb={5} sx={{ fontFamily: "monospace" }}>
        Text
      </Typography>
      <Box mt={5} justifyContent="center" display="flex" flexDirection="row">
        <Button
          variant="contained"
          style={{ minHeight: "50px", minWidth: "150px" }}
        >
          Yes
        </Button>
        <Box width="50px"></Box>
        <Button
          variant="contained"
          onClick={() => {
            alert("This is an error alert — check it out!");
          }}
          style={{ minHeight: "50px", minWidth: "150px" }}
        >
          No
        </Button>
      </Box>
    </Box>
  );
}
