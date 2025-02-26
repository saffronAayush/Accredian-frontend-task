import { Box, Typography } from "@mui/material";
import { ligthBlue } from "../utils/constants";

const Navbar = ({ navItems, handleScroll, active }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "linear-gradient(to bottom, #e0ecff, #d0e2ff)", // Light blue gradient
        borderRadius: "50px",
        padding: "10px 20px",
        padding: { xs: "10px 15px", sm: "10px 15px", md: "10px 20px" },
        width: { xs: "95%", sm: "60%", md: "80%" }, // Responsive width
        maxWidth: "650px",
        margin: "25px auto", // Center align
      }}
    >
      {navItems.map((item) => (
        <Box
          key={item.id}
          onClick={() => handleScroll(item.id)}
          sx={{
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "13px", sm: "16px", md: "18px" }, // Responsive font size
              fontWeight: active === item.id ? "bold" : "normal",
              color: active === item.id ? ligthBlue : "black",
              ":hover": {
                color: "blue",
              },
            }}
          >
            {item.label}
          </Typography>
          {active === item.id && (
            <Box
              sx={{
                width: "5px",
                height: "5px",
                backgroundColor: ligthBlue,
                borderRadius: "50%",
                margin: "auto",
                marginTop: "3px",
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
