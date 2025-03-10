import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import ReferButton from "../../components/ReferButton";
import { ligthBlue, pageMaxWidth } from "../../utils/constants";
import { referalPrograms, sidebarItems } from "../../utils/sampleData";

const ReferralBenefitsSection = ({ ref }) => {
  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <Box
      ref={ref}
      sx={{
        maxWidth: pageMaxWidth,
        margin: "auto",
        padding: "10px 25px",
        flexDirection: "column",
        gap: "25px",
        mt: "30px",
        alignItems: "center",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "26px", sm: "30px", md: "38px" },
        }}
      >
        What Are The{" "}
        <Typography variant="span" sx={{ color: ligthBlue }}>
          Referral Benefits?
        </Typography>
      </Typography>

      {/* Tables  */}
      <Box
        sx={{
          display: "flex",
          padding: 2,
          //   overflow: "auto",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: "250px",
            borderRadius: "10px",
            height: "100%",
            flexGrow: 2,
            overflow: "auto",
            bgcolor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",

            // padding: 2,
          }}
        >
          <List
            sx={{
              padding: "0",
              //   bgcolor: "white",
              //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {sidebarItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  button
                  onClick={() => handleToggle(index)}
                  sx={{
                    borderBottom: "1px solid gray",
                    bgcolor: index === 0 ? "#1976d2" : "transparent",
                    color: index === 0 ? "white" : "black",
                    cursor: "pointer",
                    ":hover": {
                      bgcolor: "rgba(134, 174, 209, 0.9)",
                      color: "black",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2, // Limits text to 2 lines
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "200px", // Adjust based on your layout
                      wordBreak: "break-word",
                    }}
                  />
                  <KeyboardArrowRightOutlined />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Box>

        {/* Main Content (Table) */}
        <Box sx={{ flexGrow: 1, marginLeft: 3 }}>
          <TableContainer
            component={Paper}
            sx={{
              bgcolor: "#eef5ff8c",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#1976d2" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Programs
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Referrer Bonus
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Referee Bonus
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {referalPrograms.map((program, index) => (
                  <TableRow key={index}>
                    <TableCell>{program.name}</TableCell>
                    <TableCell>{program.referrer}</TableCell>
                    <TableCell>{program.referee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <ReferButton />
    </Box>
  );
};

export default ReferralBenefitsSection;
