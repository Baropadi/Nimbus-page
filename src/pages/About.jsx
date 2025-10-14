import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function About() {
  const teamMembers = [
    {
      name: "Rudolf Busch Oetjen",
      role: "Socio & Cofundador",
      image: "/src/assets/nosotros1.png",
    },
    {
      name: "Marlo Paredes Arce",
      role: "Socio & Cofundador",
      image: "/src/assets/nosotros2.png",
    },
    {
      name: "Juan Cataldo Smith",
      role: "Socio & Cofundador",
      image: "/src/assets/nosotros3.png",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/src/assets/FondoAbout1.png')",
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
          Sobre nosotros
        </Typography>
      </Box>

      <Box className="box-text">
        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            color: "white",
          }}
        >
          Somos una empresa de servicios profesionales focalizada en proyectos
          de virtualización con tecnologías VMware.
        </Typography>
      </Box>

      <Box className="box-text">
        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            color: "white",
          }}
        >
          Nuestros profesionales cuentan con una vasta experiencia obtenida en
          distintas empresas tecnológicas, tanto nacionales como
          internacionales.
        </Typography>
      </Box>

      <Box sx={{ mt: 10, mb: 8, zIndex: 2 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 6, textAlign: "center" }}
        >
          Nuestro Equipo
        </Typography>

        <Grid container spacing={8} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.31)",
                  borderRadius: 3,
                  borderTopLeftRadius: 80,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 6px 20px rgba(0,0,0,0.5)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color:'HighlightText'
                  }}>
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
