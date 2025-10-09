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
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Typography variant="h2" sx={{ width: "100%", fontWeight: "bold", m: 2 }}>
        Sobre nosotros
      </Typography>
    </Box>
  );
};

export default About;
