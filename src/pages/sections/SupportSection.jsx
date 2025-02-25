import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { pageMaxWidth } from "../../utils/constants";

const SupportSection = ({ ref }) => {
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(to right, #1976d2, #1565c0)",
        borderRadius: "12px",
        padding: { xs: "20px", sm: "24px", md: "32px" },
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        width: { sm: "90%", xs: "98%" },
        maxWidth: pageMaxWidth,
        margin: "auto",
        mt: "30px",
        minHeight: { xs: "auto", md: "180px" }, // Adaptive height
        textAlign: { xs: "center", md: "left" }, // Center text on small screens
        gap: { xs: 2, md: 0 }, // Adds spacing in vertical layout
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          right: 0,
          background:
            "radial-gradient(circle, rgba(33, 150, 243, 0.3) 0%, rgba(21, 101, 192, 0) 60%)",
          backgroundImage: `url("https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/cta-circle.svg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      {/* Icon */}
      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "12px",
          mb: { xs: "12px", md: "0" },
          mr: "20px", // Adds space when stacked
        }}
      >
        <HeadsetMicIcon sx={{ color: "#1976d2", fontSize: "40px" }} />
      </Box>

      {/* Text Section */}
      <Box sx={{ flex: 1, zIndex: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Want to delve deeper into the program?
        </Typography>
        <Typography variant="body2">
          Share your details to receive expert insights from our program team!
        </Typography>
      </Box>

      {/* Button */}
      <Box
        sx={{
          zIndex: 2,
          mt: { xs: "16px", md: "0" }, // Adds space when stacked
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#1976d2",
            fontWeight: "bold",
            width: { xs: "100%", sm: "auto" }, // Full-width on small screens
          }}
        >
          Get in touch →
        </Button>
      </Box>
    </Box>
  );
};

export default SupportSection;
