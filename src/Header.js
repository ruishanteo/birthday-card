import React, { useState } from "react";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import CakeIcon from "@mui/icons-material/Cake";
import Face5Icon from "@mui/icons-material/Face5";

export function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ee898f" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CakeIcon
            sx={{ fontSize: 40, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/birthday-card/#/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            hpbd!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              component="a"
              href="/birthday-card/#/home"
              color="black"
            >
              <CakeIcon sx={{ fontSize: 40, color: "black" }} />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/birthday-card/#/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            hpbd!
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
            }}
          >
            <Tooltip title="hello!">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                }}
              >
                <Face5Icon
                  sx={{
                    fontSize: 40,
                    color: "black",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem component="a" href="/birthday-card/#/home">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
