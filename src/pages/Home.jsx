import { Box, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/src/assets/FondoHome1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        px: { xs: 2, sm: 4, md: 10 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box className="box-gradient" />

      {/* Título de la sección */}
      <Box
        className="box-title"
        sx={{
          pl: { xs: 0, md: 5 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
          }}
        >
          Bienvenido a Nimbus Technology
        </Typography>
      </Box>

      {/* Texto Principal */}
      <Box
        className="box-text"
        sx={{
          pl: { xs: 0, md: 3.5 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" },
          }}
        >
          Ofrecemos soluciones tecnológicas para empresas y particulares.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
