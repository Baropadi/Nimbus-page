import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function About() {
  const teamMembers = [
    {
      name: "Rudolf Busch Oetjen",
      role: "Socio & Cofundador",
      image: "/src/assets/nosotros1.png",
      details:
        "Ingeniero especializado en infraestructura tecnológica y soluciones de almacenamiento empresarial. Con más de 15 años de experiencia en gestión de proyectos IT.",
    },
    {
      name: "Marlo Paredes Arce",
      role: "Socio & Cofundador",
      image: "/src/assets/nosotros2.png",
      details:
        "Experto en virtualización de servidores y administración de entornos VMware. Ha liderado implementaciones de sistemas de alta disponibilidad.",
    },
    {
      name: "Juan Cataldo Smith",
      role: "Socio & Cofundador",
      image: "/src/assets/nosotros3.png",
      details:
        "Profesional con amplia experiencia en soporte técnico y desarrollo de soluciones tecnológicas personalizadas para empresas del rubro industrial.",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleToggle = (index) => {
    setSelectedMember(selectedMember === index ? null : index);
  };

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
          variant="h5"
          sx={{
            textAlign: "left",
            color: "white",
          }}
        >
          Somos una empresa de servicios profesionales focalizada en proyectos
          de virtualización con tecnologías VMware.
        </Typography>
      </Box>

      <Paper
        className="info-about"
        sx={{
          zIndex: 2,
          p: 4,
          pl: 5,
          mt: 10,
          mr: 10,
          mb: 4,
          ml: 0,
          borderRadius: 0,
          borderTopRightRadius: 55,
          borderBottomRightRadius: 55,
          backgroundColor: "rgba(242, 238, 223, 0.9)",
          color: "GrayText",
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
          Realizamos respaldos de máquinas virtuales (y físicas), utilizando el
          software <strong>Veeam Backup Replicator</strong>, muy popular en
          ambientes virtualizados.
        </Typography>
        <Typography variant="subtitle1">
          Trabajamos principalmente con hardware{" "}
          <strong>Dell Technologies</strong>, Servidores
          <strong> PowerEdge</strong>, con uno o más procesadores (CPUs), discos
          internos, SAS, NL_SAS, SSD, NVMe, etc. Laptops, estaciones de trabajo,
          servidores, switches ethernet, switches FC, sistemas de almacenamiento
          inteligentes. <br />
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1.5 }}>
          <strong>Sistemas de almacenamiento inteligentes:</strong> Series Dell
          EMC, PowerVault MD, Compellent SC, VNX, VNXe, Unity, PowerStore y sus
          diferentes modelos, en todas sus variedades de discos. Migraciones de
          datos entre los mismos sistemas de almacenamiento compatibles.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1.5, fontWeight: "bold" }}>
          Cuéntenos lo que necesita y podemos configurar su laptop, servidor
          PowerEdge, estación de trabajo o sistema de almacenamiento inteligente
          ad-hoc a las necesidades de su empresa.
        </Typography>
      </Paper>

      <Box className="box-text">
        <Typography
          variant="h5"
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

        <Grid container spacing={2} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 4 }}
              justifyContent="center"
            >
              <Card
                onClick={() => handleToggle(index)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.31)",
                  borderRadius: 3,
                  borderTopLeftRadius: 80,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  ml: { xs: 8, sm: 5, md: 4 },
                  mr: { xs: 8, sm: 5, md: 4 },
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
                  <Typography
                    variant="body2"
                    sx={{
                      color: "HighlightText",
                    }}
                  >
                    {member.role}
                  </Typography>
                </CardContent>

                <Collapse
                  in={selectedMember === index}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent
                    sx={{
                      borderTop: "1px solid rgba(0,0,0,.1)",
                      backgroundColor: "rgba(255,255,255,0.6)",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {member.details}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
