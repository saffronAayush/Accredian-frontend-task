import { Box, Typography } from "@mui/material";
import React from "react";
import ReferButton from "../../components/ReferButton";

const HeroSection = ({ ref }) => {
  return (
    <Box
      ref={ref}
      sx={{
        width: "75%",
        margin: "auto",
        height: { xs: "40vw", md: "36vw" },
        backgroundImage: `url("https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hero-sec-background.svg")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        mt: "26px",
        bgcolor: "#eff6ff",
        boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.2)",
        "@media (max-width:555px)": {
          backgroundImage: `url("https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/money-background.svg")`,
          alignItems: "center",
          width: "80%",
        },
      }}
    >
      {/* Left Side - Text */}
      <Box
        sx={{
          maxWidth: "500px",
          ml: "4%",
          display: "flex",
          maxWidth: "40%",
          flexDirection: "column",
          alignItems: "start",
          "@media (max-width:555px)": {
            alignItems: "center",
            maxWidth: "90%",
          },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "20px", sm: "22px", md: "48px", lg: "58px" },
            mb: { xs: "10px", sm: "10px", md: "25px" },
            textAlign: "start",
          }}
        >
          Let's Learn & Earn
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            mb: 2,
            fontSize: { xs: "14px", sm: "18px", md: "26px", lg: "30px" },
            mb: { xs: "10px", sm: "10px", md: "25px" },
            textAlign: "start",
            "@media (max-width:555px)": {
              textAlign: "center",
            },
          }}
        >
          Get a chance to earn{" "}
          <Typography
            component="span"
            sx={{
              color: "blue",
              fontWeight: "bold",
              fontSize: { sm: "20px", md: "28px", lg: "32px" },
            }}
          >
            ₹10,000
          </Typography>{" "}
          for every friend who enrolls!
        </Typography>
        <ReferButton />
      </Box>
    </Box>
  );
};

export default HeroSection;
