import { Box, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/src/assets/FondoServices1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
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
          p: "15px",
          m: '3em 0.5em 0em 0.5em',
        }}
      >
        <Typography
          variant="h2"
          sx={{ width: "100%", fontWeight: "bold", textAlign: "left" }}
        >
          Nuestros servicios
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(26, 46, 46, 0.4)",
          borderRadius: "0.5rem",
          p: "10px",
          m: "2em",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
          Ofrecemos una amplia gama de servicios profesionales focalizados en
          proyectos de virtualización con tecnologías VMware, además de
          consultoría IT y soporte técnico.
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
