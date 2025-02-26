import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppStore } from "../../store";
import { ligthBlue, server } from "../utils/constants";

const LoginModal = ({ handleClose }) => {
  const [open, setOpen] = useState(false);
  const [referralToken, setReferralToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // constants *******************************************************************************************
  const { user, setUserInfo } = useAppStore();
  const location = useLocation();
  const navigate = useNavigate();

  // function *********************************************************************************************
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    const id = toast.loading("Signing in...");
    try {
      const dataToSend = {
        email,
        password,
        token: referralToken,
      };
      const { data } = await axios.post(
        `${server}/auth/signuplogin`,
        dataToSend,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      localStorage.setItem("token", data.token);

      toast.success(data.message || "You are all set to go", { id });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "something went wrong", {
        id,
      });
    } finally {
      navigate("/");
      window.location.reload();
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? "" : "Invalid email format");
  };

  // check for form validation ***************************************
  const isFormValid = email && password && !emailError;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const isAvail = queryParams.get("signuplogin");
    const refToken = queryParams.get("referralCode");

    if (isAvail && !user) {
      setOpen(true);
    } else setOpen(false);

    if (refToken) {
      setReferralToken(refToken);
    }
  }, [location.search]);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "400px" },
          bgcolor: "rgba(240, 248, 255, 0.9)",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
          textAlign: "center",
          backdropFilter: "blur(5px)",
          backgroundImage: `url("https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/money-background.svg")`,
          backgroundSize: "cover",
        }}
      >
        {referralToken && (
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Redeem Referral By{" "}
            <span style={{ color: ligthBlue }}> Signing Up</span>
          </Typography>
        )}

        {referralToken && (
          <TextField
            fullWidth
            label="Referral Token"
            variant="outlined"
            value={referralToken}
            disabled
            sx={{ mb: 2, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
          />
        )}

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
          sx={{ mb: 2, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!isFormValid}
          onClick={handleLogin}
          sx={{
            fontSize: "16px",
            padding: "10px",
            borderRadius: "8px",
            textTransform: "none",
            bgcolor: isFormValid ? "#1976d2" : "#ccc",
            "&:hover": {
              bgcolor: isFormValid ? "#1565c0" : "#ccc",
            },
          }}
        >
          Log In / Sign Up
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
