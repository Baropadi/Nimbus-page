import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesList from "../components/ServicesList";

function Services() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/src/assets/FondoServices1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Box className="box-gradient" />
      <Box
        className="box-title"
        sx={{
          mt: 15,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Nuestros servicios
        </Typography>
      </Box>
      <Box className="box-text">
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          Ofrecemos una amplia gama de servicios profesionales focalizados en
          proyectos de virtualización con tecnologías VMware, además de
          consultoría IT y soporte técnico.
        </Typography>
      </Box>
      <Box sx={{ mt: 10, mb: 8, zIndex: 2 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 6, textAlign: "center" }}
        >
          Servicios principales
        </Typography>
        <ServicesList />
      </Box>
    </Box>
  );
}

export default Services;
