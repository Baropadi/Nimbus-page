import { Box, Paper, Typography } from "@mui/material";
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
        <Typography variant="h5" sx={{ textAlign: "left", mb: 3 }}>
          Ofrecemos una amplia gama de servicios profesionales focalizados en
          proyectos de virtualización con tecnologías VMware, además de
          consultoría IT y soporte técnico.
        </Typography>
      </Box>
      <Paper
        sx={{
          zIndex: 2,
          p: 4,
          mt: 8,
          mr: 0,
          mb:6,
          ml: 10,
          borderRadius: 0,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 150,
          backgroundColor: "rgba(19, 50, 47, 0.45)",
          color: "whitesmoke",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "right" }}>
          Nuestro portafolio de servicios va desde la definición de arquitectura
          tecnológica, la implementación de la misma, puesta en producción,
          capacitación de los recursos técnicos, hasta el soporte técnico
          requerido. <br /> <br />
          <strong>
            Todo siempre basado en las mejores prácticas de la industria.
          </strong>
        </Typography>
      </Paper>
      <Box sx={{ zIndex: 2 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 3, mt: 3 }}
        >
          Servicios principales
        </Typography>
        <Box
          sx={{
            alignContent: "center",
            ml: { xs: 15, md: 40 },
            mr: { xs: 15, md: 40 },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              textShadow: "2px 4px 4px rgba(0, 0, 0, 0.64)",
            }}
          >
            <ul>
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
