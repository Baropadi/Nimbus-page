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
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 10 },
        color: "white",
      }}
    >
      <Box className="box-gradient" />

      <Box
        className="box-title"
        sx={{
          mt: { xs: 12, md: 15 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.9rem", sm: "2.2rem", md: "3rem" },
          }}
        >
          Contacto
        </Typography>
      </Box>

      <Box
        className="box-text"
        sx={{
          mb: { xs: 8, md: 12 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Contáctanos a través de los siguientes medios:
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 3,
            mb: 2,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
            textAlign: { xs: "center", md: "left" },
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
          }}
        >
          Tel: +56 2 2276 6181
          <br />
          Correo: administracion@nimbustech.cl
          <br />
          Ubicación: Barros Borgoño 110, Oficina 809, Providencia, Santiago,
          Chile.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 4,
            fontWeight: "bold",
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
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
              color: "lightgoldenrodyellow",
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
