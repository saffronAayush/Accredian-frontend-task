import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pageMaxWidth } from "../../utils/constants";

const faqData = [
  {
    category: "Eligibility",
    questions: [
      {
        question: "Do I need prior experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience...",
      },
      {
        question: "What is the minimum system configuration required?",
        answer:
          "Any modern laptop with at least 4GB RAM and a stable internet connection.",
      },
    ],
  },
  {
    category: "How To Use?",
    questions: [
      {
        question: "How do I access the course materials?",
        answer:
          "You can access them via the student dashboard after logging in.",
      },
    ],
  },
  {
    category: "Terms & Conditions",
    questions: [
      {
        question: "Can I get a refund after enrolling?",
        answer: "Refunds are available within the first 7 days of enrollment.",
      },
    ],
  },
];
const FAQsection = ({ ref }) => {
  const [selectedCategory, setSelectedCategory] = useState(faqData[0]);

  return (
    <Box
      ref={ref}
      sx={{
        maxWidth: pageMaxWidth,
        margin: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "25px",
        mt: "50px",
        padding: 2,
      }}
    >
      {/* Header */}

      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "26px", sm: "30px", md: "38px" },
        }}
      >
        Frequently Asked{" "}
        <Typography variant="span" sx={{ color: "#1976d2" }}>
          Questions
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        {/* Buttons (Move to Top on Small Screens) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "column", xs: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
            gap: 1,
            // width: "550px",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          {faqData.map((category, index) => (
            <Button
              key={index}
              b
              variant={
                selectedCategory.category === category.category
                  ? "contained"
                  : "outlined"
              }
              onClick={() => setSelectedCategory(category)}
              sx={{
                overflow: "auto",

                width: { xs: "auto", sm: "200px" },
                textTransform: "none",
                fontWeight: "bold",
                // width: "180px",
                fontSize: { md: "16px", sm: "16px", xs: "14px" },
              }}
            >
              {category.category}
            </Button>
          ))}
        </Box>

        {/* FAQ Accordion */}
        <Box textAlign="left">
          {selectedCategory.questions.map((item, index) => (
            <Accordion
              key={index}
              sx={{ boxShadow: "none", borderBottom: "1px solid #ddd" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "16px", xs: "16px" },
                }}
              >
                {item.question}
              </AccordionSummary>
              <AccordionDetails>{item.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQsection;
