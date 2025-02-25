import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { useAppStore } from "../../store";
import toast from "react-hot-toast";
import { ligthBlue } from "../utils/constants";
import axios from "axios";

const ReferButton = () => {
  const [open, setOpen] = useState(false);
  const [receiverName, setReceiverName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [emailError, setEmailError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { user } = useAppStore();
  const server = `${import.meta.env.VITE_SERVER_URL}/api/v1`;
  const referrerName = user?.name || "Someone"; // Default in case user is null

  const handleOpen = () => {
    if (!user) {
      toast.error("Login to Refer a Course");
      return;
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const submitHandler = async () => {
    setDisabled(true);
    const id = toast.loading("Submiting ...");

    try {
      const dataToSend = {
        referrerName,
        receiverName,
        email,
        course,
      };
      const { data } = await axios.post(
        `${server}/user/refercourse`,
        dataToSend,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("succes");
      toast.success(data.message || "Referral Sent Successfully", { id });
    } catch (error) {
      console.log("err ins us", error);
      toast.error(error.response.data.message || "Something Went wrong", {
        id,
      });
    } finally {
      setOpen(false);
      setDisabled(false);
      setReceiverName("");
      setEmail("");

      setCourse("");
    }
  };

  // Check if all fields are filled and valid
  const isFormValid = receiverName && course && email && !emailError;

  return (
    <div>
      {/* Refer Now Button */}
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#007bff",
          color: "#fff",
          textTransform: "none",
          fontSize: "16px",
          padding: "6px 10px",
          maxWidth: "130px",
          padding: { lg: "10px 22px" },
          mt: { sm: "15px", md: "12px", lg: "20px" },
          "&:hover": { backgroundColor: "#0056b3" },
          "@media (max-width:555px)": {
            padding: "5px 16px",
            fontSize: "14px",
          },
        }}
      >
        Refer Now
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "400px" },
            bgcolor: "rgba(240, 248, 255, 0.9)", // Very light blue with transparency
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
            textAlign: "center",
            backgroundImage: `url("https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/money-background.svg")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backdropFilter: "blur(5px)", // Softens the background
          }}
        >
          {/* Referrer Name */}
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
          >
            <span
              style={{
                color: ligthBlue,
              }}
            >
              {referrerName}
            </span>{" "}
            is Referring a Course
          </Typography>

          {/* Course Selector */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Select Course</InputLabel>
            <Select value={course} onChange={(e) => setCourse(e.target.value)}>
              <MenuItem value="AI Basics">AI Basics</MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Data Science">Data Science</MenuItem>
              <MenuItem value="Machine Learning">Machine Learning</MenuItem>
              <MenuItem value="Cybersecurity">Cybersecurity</MenuItem>
              <MenuItem value="Cloud Computing">Cloud Computing</MenuItem>
              <MenuItem value="Blockchain Technology">
                Blockchain Technology
              </MenuItem>
              <MenuItem value="Python for Beginners">
                Python for Beginners
              </MenuItem>
              <MenuItem value="Full Stack Development">
                Full Stack Development
              </MenuItem>
              <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
            </Select>
          </FormControl>

          {/* Receiver Name Field */}
          <TextField
            fullWidth
            label="Receiver Name"
            variant="outlined"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            sx={{
              mb: 2,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "5px",
            }}
          />

          {/* Email Field */}
          <TextField
            fullWidth
            label="Receiver Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
            sx={{
              mb: 2,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "5px",
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="success"
            fullWidth
            disabled={!isFormValid || disabled}
            onClick={submitHandler}
            sx={{
              fontSize: "16px",
              padding: "10px",
              borderRadius: "8px",
              textTransform: "none",
              bgcolor: isFormValid ? "#28a745" : "#ccc",
              "&:hover": {
                bgcolor: isFormValid ? "#218838" : "#ccc",
              },
            }}
          >
            Send Referral
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ReferButton;
