import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
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
      <Box
        className="box-title"
        sx={{
          mt: 15,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Contacto
        </Typography>
      </Box>
      <Box
        className="box-text"
        sx={{
          mb: 12,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Contáctanos a través de los siguientes medios:
        </Typography>
        <br />
        <Typography
          variant="h5"
          sx={{ ml: 8, mt: 2, mb: 2, textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
        >
          Tel: +56 2 2276 6181
          <br />
          Correo: info@nimbustech.cl
          <br />
          Ubicación: Barros Borgoño 110, Oficina 809, Providencia, Santiago,
          Chile.
        </Typography>
        <br />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textShadow: "1px 4px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Si necesitas saber más o quieres realizar una cotización con nosotros,
          escríbenos{" "}
          <Typography
            className="contact-link"
            variant="h5"
            component="a"
            href="#"
            onClick={handleScrollToForm}
            sx={{
              textDecoration: "none",
              color: 'lightgoldenrodyellow',
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline-block",
              transition: "transform 0.2s ease, color 0.2s ease",
              "&:hover": {
                transform: "scale(1.1)",
                color: "gold",
              },
            }}
          >
            AQUÍ.
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
