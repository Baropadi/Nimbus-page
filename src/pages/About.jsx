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
      details: [
        "VMware Capacity Planner 2.7",
        "VMware VSP 4, VTSP 4",
        "VMware Technical Sales Professional",
        "Infrastructure Virtualization",
        "Business Continuity",
        "Desktop Virtualization EMC",
        "Acreditación de Ventas y System Engineer EMC",
        "Technology Architect",
        "Storage & Information Infrastructure - Commercial Specialist Version 5.0 (EMCTA)",
        "Dell PS Series EqualLogic - Advanced Features, Operations and Administration (Dell Austin USA)",
        "Dell PS Series EgualLogic - Business Continuity and Disaster Recovery (Dell Austin USA)",
      ],
      // "Ingeniero especializado en infraestructura tecnológica y soluciones de almacenamiento empresarial. Con más de 15 años de experiencia en gestión de proyectos IT.",
    },
    {
      name: "Marlo Paredes Arce",
      role: "Socio & Cofundador",
      image: "/src/assets/nosotros2.png",
      details: [
        "EMCCIE Clariion Certified Implementation Engineer at EMC Computer Systems (Boston USA)",
        "VMware Certified Professional VCP (Santiago, Chile)",
        "Dell EqualLogic - Advanced Features, Operations and Administration (Dell Austin USA)",
        "Dell EqualLogic - Business Continuity and Disaster Recovery (Dell Austin USA)",
      ],
      // "Experto en virtualización de servidores y administración de entornos VMware. Ha liderado implementaciones de sistemas de alta disponibilidad.",
    },
    {
      name: "Juan Cataldo Smith",
      role: "Socio & Cofundador",
      image: "/src/assets/nosotros3.png",
      details: [
        "VMware Certified Professional vSphere 4, en VI3",
        "VMware Certified Professional ESX Server & VirtualCenter 2",
        "VMware Technical Sales Professional Desktop Solutions",
        "Infrastructure Virtualization",
        "VSLA Management - Workstation and Lab Manager",
        "Enterprise Desktop",
        "Testing and Development Environments",
        "Server Consolidation and Containment",
        "Business Continuity",
        "Desktop Manageability & Security",
        "EMC System Engineer Acreditation 2008",
      ],
      // "Profesional con amplia experiencia en soporte técnico y desarrollo de soluciones tecnológicas personalizadas para empresas del rubro industrial.",
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
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 10 },
        color: "white",
      }}
    >
      <Box className="box-gradient" />

      {/* Título de la sección */}
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
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Sobre nosotros
        </Typography>
      </Box>

      {/* Texto Principal */}
      <Box className="box-text">
        <Typography
          variant="h5"
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1.1rem", sm: "1.5rem" },
            mb: 2,
          }}
        >
          Somos una empresa de servicios profesionales focalizada en proyectos
          de virtualización con tecnologías VMware.
        </Typography>
      </Box>

      {/* Información Descriptiva */}
      <Paper
        sx={{
          zIndex: 2,
          p: { xs: 2.5, sm: 4, md: 5 },
          mt: { xs: 8, md: 10 },
          mx: { xs: 0, sm: 2, md: 6 },
          borderRadius: { xs: 3, md: 5 },
          borderBottomLeftRadius: { md: 150 },
          backgroundColor: "rgba(19, 50, 47, 0.45)",
          color: "whitesmoke",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            mb: 1.5,
            textAlign: { xs: "center", md: "right" },
          }}
        >
          Realizamos respaldos de máquinas virtuales (y físicas), utilizando el
          software <strong>Veeam Backup Replicator</strong>, muy popular en
          ambientes virtualizados.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: { xs: "center", md: "right" },
          }}
        >
          Trabajamos principalmente con hardware{" "}
          <strong>Dell Technologies</strong>, Servidores
          <strong> PowerEdge</strong>, con uno o más procesadores, discos SAS,
          NL_SAS, SSD, NVMe y más. Laptops, estaciones de trabajo, servidores,
          switches ethernet, switches FC y sistemas de almacenamiento
          inteligentes. <br />
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 1.5,
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <strong>Sistemas de almacenamiento inteligentes:</strong> Series Dell
          EMC, PowerVault MD, Compellent SC, VNX, Unity, PowerStore en todas sus
          variedades de discos. Migraciones de datos entre los mismos sistemas
          de almacenamiento compatibles.
        </Typography>
      </Paper>

      <Paper
        sx={{
          zIndex: 2,
          p: { xs: 2, sm: 3, md: 4 },
          mt: 6,
          mx: { xs: 2, sm: 4, md: 15 },
          borderRadius: { xs: 3, md: 5 },
          backgroundColor: "rgba(0, 20, 18, 0.56)",
          color: "whitesmoke",
          boxShadow: "6px 8px 10px rgba(0, 0, 0, 0.64)",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
          <strong>¡Cuéntanos lo que necesitas!</strong>
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Nosotros podemos configurar tu laptop, servidor PowerEdge, estación de
          trabajo o sistema de almacenamiento inteligente ad-hoc a las
          necesidades de tu empresa.
        </Typography>
      </Paper>

      <Box className="box-text">
        <Typography
          variant="h5"
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1.1rem", sm: "1.4rem" },
            color: "white",
            mt: 3,
          }}
        >
          Nuestros profesionales cuentan con una vasta experiencia obtenida en
          distintas empresas tecnológicas, tanto nacionales como
          internacionales.
        </Typography>
      </Box>

      {/* Equipo */}
      <Box sx={{ mt: 10, mb: 8, zIndex: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "2.7rem" },
          }}
        >
          Nuestro Equipo
        </Typography>

        <Grid container spacing={3} justifyContent="center">
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
                  ml: "auto",
                  mr: "auto",
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
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.3rem",
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
                      pl: 3,
                      pr: 4,
                      borderTop: "1px solid rgba(0,0,0,.1)",
                      backgroundColor: "rgba(255,255,255,0.6)",
                    }}
                  >
                    <Typography
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        mt: 2,
                        color: "darkslategrey",
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.35)",
                      }}
                    >
                      Acreditaciones y Certificados:
                      <Typography component="div">
                        <ul
                          style={{
                            marginTop: "8px",
                            paddingLeft: "25px",
                            color: "darkslategray",
                          }}
                        >
                          {member.details.map((detail) => (
                            <li>
                              <Typography variant="body" color="textSecondary">
                                {detail}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Typography>
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
