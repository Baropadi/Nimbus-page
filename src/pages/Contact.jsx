import { Box, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/src/assets/FondoContact1.png')",
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
          Contacto
        </Typography>
      </Box>
      <Box className="box-text">
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold" }}
        >
          Puedes contactarnos a través de los siguientes medios:
        </Typography>
        <br />
        <Typography variant="h5" sx={{ ml: 8 }}>
          Tel: +56 2 2276 6181
          <br />
          Correo: info@nimbustech.cl
          <br />
          Ubicación: Barros Borgoño 110, Oficina 809, Providencia, Santiago,
          Chile.
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
