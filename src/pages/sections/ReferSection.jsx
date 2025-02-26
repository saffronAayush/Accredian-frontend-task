import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import ReferButton from "../../components/ReferButton";
import { ligthBlue, pageMaxWidth } from "../../utils/constants";

const ReferSection = ({ ref }) => {
  return (
    <Box ref={ref} sx={{ bgcolor: "#eef5ff", mt: "30px" }}>
      <Box
        sx={{
          maxWidth: pageMaxWidth,
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "auto",
          "@media (max-width:555px)": {
            gap: "0",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "26px", sm: "30px", md: "38px" },
          }}
        >
          How do I{" "}
          <Typography variant="span" sx={{ color: ligthBlue }}>
            Refer?
          </Typography>
        </Typography>
        <CardMedia
          component={"img"}
          image="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ref-process-horizontal-v2.svg"
          alt="image"
          sx={{
            width: "85%",
            "@media (max-width:555px)": {
              display: "none",
            },
          }}
        />
        <CardMedia
          component={"img"}
          image="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ref-process-vertical-v2.svg"
          alt="image"
          sx={{
            // height: "780px",
            width: "70%",
            "@media (min-width:555px)": {
              display: "none",
            },
          }}
        />
        <ReferButton />
      </Box>
    </Box>
  );
};

export default ReferSection;
