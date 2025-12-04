import { Box, Paper, Typography } from "@mui/material";
import fondoServices from "../assets/FondoServices1.webp";
import React from "react";
import ServicesList from "../components/ServicesList";

function Services() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${fondoServices})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        px: { xs: 2, sm: 4, md: 10 },
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
            fontSize: { xs: "1.8rem", sm: "2.3rem", md: "3rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Nuestros servicios
        </Typography>
      </Box>

      <Box className="box-text">
        <Typography
          variant="h5"
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1.1rem", sm: "1.5rem" },
            mb: 3,
          }}
        >
          Ofrecemos una amplia gama de servicios profesionales focalizados en
          proyectos de virtualización con tecnologías VMware, además de
          consultoría IT y soporte técnico.
        </Typography>
      </Box>

      <Paper
        sx={{
          zIndex: 2,
          p: { xs: 2, sm: 3, md: 4 },
          mt: { xs: 4, md: 8 },
          mx: { xs: 0, md: 10 },
          borderRadius: { xs: 3, md: 5 },
          borderBottomLeftRadius: { md: 150 },
          backgroundColor: "rgba(19, 50, 47, 0.45)",
          color: "whitesmoke",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: { xs: "center", md: "right" },
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          Nuestro portafolio de servicios va desde la definición de arquitectura
          tecnológica, la implementación de la misma, puesta en producción,
          capacitación de los recursos técnicos, hasta el soporte técnico
          requerido.
          <br />
          <br />
          <strong>
            Todo siempre basado en las mejores prácticas de la industria.
          </strong>
        </Typography>
      </Paper>

      <Box sx={{ zIndex: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: { xs: 4, md: 6 },
            mb: { xs: 2, md: 3 },
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
          }}
        >
          Servicios principales
        </Typography>
        <Box
          sx={{
            mx: "auto",
            maxWidth: { xs: "90%", sm: "80%", md: "60%" },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              textShadow: "2px 4px 4px rgba(0, 0, 0, 0.64)",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            }}
          >
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li>Consolidación y virtualización de servidores.</li>
              <li>Virtualizaciones de estaciones de trabajo.</li>
              <li>Backup & Recovery para ambientes virtuales y físicos.</li>
              <li>
                Business Continuity para ambientes virtuales (HA, Site Recovery
                y Manager).
              </li>
              <li>Configuración de almacenamientos externos y servidores.</li>
            </ul>
          </Typography>
        </Box>

        <ServicesList />
      </Box>
    </Box>
  );
}

export default Services;
