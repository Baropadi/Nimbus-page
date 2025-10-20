import { Box, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/src/assets/FondoHome1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Box className="box-gradient" />
      <Box className="box-title">
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Bienvenido a Nimbus Technology
        </Typography>
      </Box>
      <Box className="box-text">
        <Typography
          variant="h5"
          sx={{
            textAlign: "left",
          }}
        >
          Ofrecemos soluciones tecnológicas para empresas y particulares.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
