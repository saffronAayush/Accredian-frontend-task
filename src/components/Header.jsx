import React, { use, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {
  Business,
  ExpandMore,
  Info,
  KeyboardArrowRight,
  Layers,
  Login,
} from "@mui/icons-material";
import { useAppStore } from "../../store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginModal from "./SignupLogin";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  // Toggle Sidebar Function
  const toggleSidebar = (state) => () => {
    setOpenSidebar(state);
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        bgcolor: "white",
        zIndex: "100",
        top: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          height: "80px",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section: Logo & Courses Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <a
            href="https://accredian.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "auto",
              padding: "0",
              margin: "0",
              width: "40%",
              maxWidth: "200px",
              minWidth: "150px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              width="100%"
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="logo"
            />
          </a>
          <Button
            variant="contained"
            sx={{
              padding: "6px 10px",
              paddingLeft: "15px",
              fontSize: "12px",
              fontWeight: "bold",
              "@media(max-width: 914px)": {
                display: "none",
              },
            }}
          >
            Courses
            <KeyboardArrowDownOutlinedIcon />
          </Button>
        </Box>

        {/* Center Section: Navigation Links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            width: "600px",
            transition: "all 0.6s ease-in",
            "@media(max-width: 914px)": {
              display: "none",
            },
          }}
        >
          <Typography>Refer & Earn</Typography>
          <Typography>Resources</Typography>
          <Typography>About Us</Typography>
          <LoginButton />
          <Button variant="contained">Try for free</Button>
        </Box>

        {/* Right Section: Hamburger Menu for Small Screens */}
        <Box
          sx={{
            cursor: "pointer",
            width: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "15px",
            transition: "all 0.3s ease-in",
            "@media(min-width: 914px)": {
              display: "none",
            },
          }}
        >
          <LoginButton />
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              cursor: "pointer",
            }}
            onClick={toggleSidebar(true)}
          >
            <MenuOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Sidebar Drawer (Right Side) */}
        <Drawer anchor="left" open={openSidebar} onClose={toggleSidebar(false)}>
          <Box sx={{ width: 280, padding: "20px" }}>
            {/* Logo Inside Sidebar */}
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
                alt="Accredian Logo"
                style={{ width: "120px", marginBottom: "5px" }}
              />
            </Box>

            <List>
              <ListItem button>
                <Business sx={{ marginRight: 1 }} />
                <ListItemText primary="For Business" />
              </ListItem>
              <ListItem button>
                <Layers sx={{ marginRight: 1 }} />
                <ListItemText primary="Resources" />
                <ExpandMore />
              </ListItem>
              <ListItem button>
                <Info sx={{ marginRight: 1 }} />
                <ListItemText primary="About us" />
                <ExpandMore />
              </ListItem>
              <ListItem button>
                <Info sx={{ marginRight: 1 }} />
                <ListItemText primary="More" />
                <ExpandMore />
              </ListItem>

              {/* Login Button */}
              <ListItem button>
                <LoginButton />
              </ListItem>

              {/* Try for Free Button */}
              <ListItem button>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#f2f6fc",
                    color: "#0066ff",
                    fontWeight: "bold",
                    "&:hover": { bgcolor: "#e6efff" },
                  }}
                >
                  Try for free
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;

const server = `${import.meta.env.VITE_SERVER_URL}/api/v1`;

export const LoginButton = () => {
  const { user } = useAppStore();
  const [disabled, setDisabled] = useState(false);
  console.log("in header ", user);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("?signuplogin=true");
  };

  return (
    <>
      <Button
        variant="contained"
        disabled={user || disabled}
        sx={{ bgcolor: "#eaedf1", color: "black" }}
        onClick={handleLogin}
      >
        {user ? "Logout" : "Login"}
      </Button>
      <LoginModal />
    </>
  );
};
