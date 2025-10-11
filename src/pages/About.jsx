import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/src/assets/FondoAbout1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(26, 46, 46, 0.4)",
          borderRadius: "0.5rem",
          p: "10px",
          m: "10px",
        }}>
        <Typography
          variant="h2"
          sx={{ width: "100%", fontWeight: "bold", m: 2 }}
        >
          Sobre nosotros
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
