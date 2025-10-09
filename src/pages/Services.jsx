import { Box, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Box
      className="services"
      sx={{
        height: "100vh",
        backgroundImage: "url('/src/assets/FondoServices1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography variant="h2" sx={{ width: "100%", fontWeight: "bold", m: 2 }}>
        Nuestros servicios
      </Typography>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", width: "100%", m: 3 }}
      >
        Ofrecemos una amplia gama de servicios profesionales focalizados en proyectos de virtualización con tecnologías VMware, además de consultoría IT y soporte técnico.
      </Typography>
    </Box>
  );
};

export default Services;
