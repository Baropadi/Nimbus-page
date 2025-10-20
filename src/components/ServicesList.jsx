import * as React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Collapse,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import servicio1 from "../assets/servicio1.png";
import servicio2 from "../assets/servicio2.png";
import servicio3 from "../assets/servicio3.png";
import servicio4 from "../assets/servicio4.png";
import servicio5 from "../assets/servicio5.png";
import servicio6 from "../assets/servicio6.png";
import servicio7 from "../assets/servicio7.png";
import servicio8 from "../assets/servicio8.png";
import servicio9 from "../assets/servicio9.png";
import servicio10 from "../assets/servicio10.png";
import servicio11 from "../assets/servicio11.png";

export default function ServicesList() {
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleToggle = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        m: 5,
      }}
    >
      {itemData.map((item) => (
        <React.Fragment key={item.img}>
          <Grid>
            <ImageListItem
              sx={{
                display: selectedItem === item ? "none" : "flex",
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow:
                  selectedItem === item
                    ? "0px 4px 20px rgba(0, 0, 0, 0.8)"
                    : "0px 2px 10px rgba(0,0,0,0.2)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover img": {
                  transform: "scale(1.08)",
                  filter: "brightness(1.15",
                },
                "&:hover": {
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
                },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                }}
              />
              <ImageListItemBar
                sx={{
                  height: "35%",
                }}
                title={item.title}
                subtitle={item.description}
                actionIcon={
                  <IconButton
                    onClick={() => handleToggle(item)}
                    sx={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    <ReadMoreIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Grid>

          {selectedItem === item && (
            <Grid>
              <Collapse in={true} timeout="auto" unmountOnExit>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    backgroundColor: "rgba(240, 240, 240, 0.63)",
                    borderRadius: 5,
                    p: 5,
                    m: 2,
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      width: { xs: "100%", md: "40%" },
                      borderRadius: 4,
                      objectFit: "cover",
                      mr: { md: 3 },
                      mb: { xs: 2, md: 0 },
                    }}
                  />
                  <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1,
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {item.details}
                    </Typography>
                  </Box>
                  <IconButton
                    onClick={() => handleToggle(item)}
                    sx={{ color: "rgba(0, 55, 51, 0.85)", scale: 1.5, mt: 2 }}
                    aria-label={`info about ${item.title}`}
                  >
                    <CancelIcon />
                  </IconButton>
                </Paper>
              </Collapse>
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

const itemData = [
  {
    img: servicio1,
    title: "Sistema de almacenamiento Clariion",
    description: "Storage Area Network (SAN).",
    details:
      "Alcance de las actividades: Configuración de los Storages Processor, creación de agrupaciones de discos, definición tipos de arreglos, creación de contenedores, registros de HBA (servidores), asignación de LUN's y Host, creación de metaluns (tipos), creación, asignación y visualización de las LUN's en ambiente de operación y configuraciones de replicas locales (Snapview) y remotas (Mirrorview).",
  },
  {
    img: servicio2,
    title: "Sist. almac. DELL iSCSI MD3000i y EqualLogic",
    description: "Storage Area Network (SAN).",
    details:
      "Alcance de las actividades: Inicialización de storage, configuración de los parámetros de red, definición del tipo de arreglo, configuración de las puertas iSCSI, conexión de servidores al storage, asignación de LUN's a un serevidor y sus tipos de accesos, reconfiguraciones.",
  },
  {
    img: servicio3,
    title: "Switches de Fibra y Ethernet",
    description: "Línea Brocade, Cisco.",
    details:
      "Alcance de las actividades: Configuración de switches, zonificación mediante alias, definición de archivo de configuración, salvar y habilitar configuraciones, reporte de configuraciones efectivas.",
  },
  {
    img: servicio4,
    title: "Switches iSCI",
    description: "Línea Cisco, Powerconnect.",
    details:
      "ALcance de las actividades: Configuración de los parámetros de red y cableado de acuerdo a las mejores prácticas.",
  },
  {
    img: servicio5,
    title: "Controladores - Host Bus Adapter (HBA's)",
    description: "Línea modelos Emulex, Qlogic, HP, Sun e IBM.",
    details:
      "Alcance de las actividades: Validación, instalación, configuración y registros de HBA's en storages.",
  },
  {
    img: servicio6,
    title: "Software EMC",
    description: "Powerpath vers. 3.x, 4.x y 5.x",
    details:
      "Alcance de las actividades: Instalación de Powerpath y Navisphere Manager, instalaciones de software de Backup Avamar, configuración y presentación de volúmenes en ambiente de operación, descubrimiento del Clariion al Navisphere Manager.",
  },
  {
    img: servicio7,
    title: "Config. y asignación de discos (LUN's)",
    description: "VMware, Linux, Solaris, Windows, AIX y HPUX",
    details:
      "Alcance de las actividades: Asignación de volúmenes, presentación de volúmenes en ambiente de producción, configuración de volúmenes para software EMC Powerpath.",
  },
  {
    img: servicio8,
    title: "Implementación de réplicas en almac. EMC/DELL",
    description:
      "Clariion: Snapview y Mirrorview, AutoSnap Manager de EqualLogic.",
    details:
      "ALcance de las actividades: Creación de las LUN's privadas para réplicas, creación de sesiones de Snap para una LUN, creación de Clone Groups, operaciones con Clone (sincronizar, promover, fracturar y remover), asociar LUN targets.",
  },
  {
    img: servicio9,
    title: "Capacitaciones",
    description: "Sist. almac. DELL/EMC.",
    details:
      "ALcance de las actividades: Capacitación en la tecnología, configuración y funciones avanzadas con réplicas locales y remotas de DELL/EMC Clariion, laboratorios prácticos en configuración de arreglos de discos DELL/EMC Clariion",
  },
  {
    img: servicio10,
    title: "Levantamiento en implementaciones",
    description: "Config. con DELL/EMC Clariion y de Switches FC.",
    details:
      "ALcance de las actividades: Tomas de muestras y análisis del comportamiento de un DEL/EMC Clariion, tomas de muestras y análisis de Switches de fibra, análisis de rendimiento de LUN's, Raid Groups y Storages Processor.",
  },
  {
    img: servicio11,
    title: "Servicios profesionales con VMware",
    description: "Ambientes virtuales con VMware.",
    details:
      "ALcance de las actividades: Instalación VMware ESX Server en todas sus versiones y VMware Center, definición de redes virtuales en servidores ESX, definición de un Data Storage en servidores ESX, configuración de Storage FC, iSCI y NFS en servidores ESX, instalación y configuración de VMotion, HA y DRS, conversión de máquinas físicas a virtuales (Windows / Linux), Backup y Restore mediante BCV y VMware Data Recovery, operaciones con máquinas virtuales, virtualización de servidores Microsoft y Linux, gestión de alarmas y rendimiento en servicor VMware Virtual Center y ESX, migración de ambientes VMware ESX Server 2.x, 3.x y 4.x, implementación de soluciones de contingencia (SRM), Troubleshooting VMware Infrastructure 3 y 4, capacitaciones de VMware Infrastructure 3 y 4.",
  },
];
