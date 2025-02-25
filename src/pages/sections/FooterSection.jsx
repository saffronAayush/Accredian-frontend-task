import AddIcon from "@mui/icons-material/Add"; // Plus icon
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { pageMaxWidth } from "../../utils/constants";

const programs = [
  "Data Science & AI",
  "Product Management",
  "Business Analytics",
  "Digital Transformation",
  "Business Management",
  "Project Management",
  "Strategy & Leadership",
  "Senior Management",
  "Fintech",
];

const links = [
  "About",
  "Career",
  "Blog",
  "Admission Policy",
  "Referral Policy",
  "Privacy Policy",
  "Terms of Service",
  "Master FAQs",
];

const contactInfo = [
  "Email us (For Data Science Queries): admissions@accredian.com",
  "Email us (For Product Management Queries): learnpm@accredian.com",
  "Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)",
  "Product Management Helpline: +91 9659811095",
  "Enrolled Student Helpline: +91 7996322507",
  "Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015",
];

const Footer = ({ ref }) => {
  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: "#222",
        width: "100%",
        padding: "0",
        margin: "0",
        mt: "30px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#222",
          color: "white",
          p: 4,
          maxWidth: pageMaxWidth,
          margin: "auto",
        }}
      >
        {/* Logo at the top */}
        <Box sx={{ textAlign: "left", mb: 4 }}>
          <a
            href="https://accredian.com"
            target="_blank"
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
        </Box>
        <Divider sx={{ my: 4, backgroundColor: "#555" }} />

        {/* Main Footer Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          {/* Left Section - Expandable Programs */}
          <Box sx={{ flex: 1, minWidth: "250px" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Programs
            </Typography>
            {programs.map((program, index) => (
              <Accordion
                key={index}
                sx={{
                  background: "transparent",
                  color: "white",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon sx={{ color: "white", fontSize: "1.2rem" }} />
                  }
                  sx={{
                    padding: 0,
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    },
                  }}
                >
                  <Typography variant="body2">{program}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pl: 2 }}>
                  <Typography variant="body2" sx={{ color: "#ccc" }}>
                    More details about {program}.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
              mx: 2,
              backgroundColor: "transparent",
            }}
          />

          {/* Middle Section - Contact */}
          <Box sx={{ flex: 1, minWidth: "250px", mt: { xs: 4, md: 0 } }}>
            <Typography variant="h6" fontWeight="bold">
              Contact Us
            </Typography>
            {contactInfo.map((info, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1 }}>
                {info}
              </Typography>
            ))}
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Why Accredian
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
              mx: 2,
              backgroundColor: "transparent",
            }}
          />

          {/* Right Section - Accredian Links */}
          <Box sx={{ flex: 1, minWidth: "250px", mt: { xs: 4, md: 0 } }}>
            <Typography variant="h6" fontWeight="bold">
              Accredian
            </Typography>
            {links.map((link, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ mt: 1, cursor: "pointer", "&:hover": { opacity: 0.7 } }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box sx={{ textAlign: "center", mt: "30px", mb: "10px" }}>
          <Typography variant="body2">
            &copy; 2024 Accredian. A Brand of FullStack Education Pvt Ltd. All
            Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
