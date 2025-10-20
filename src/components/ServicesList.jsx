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
import { SportsRugbySharp } from "@mui/icons-material";

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
                title={item.title}
                subtitle={item.description}
                sx={{
                  height: "60%",
                  whiteSpace: "normal",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.93) 35%, rgba(0, 0, 0, 0.7) 75%, transparent 100%)",
                  "& .MuiImageListItemBar-title": {
                    whiteSpace: "normal",
                    overflow: "visible",
                    textOverflow: "unset",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    lineHeight: 1.5,
                  },
                  "& .MuiImageListItemBar-subtitle": {
                    whiteSpace: "normal",
                    overflow: "visible",
                    textOverflow: "unset",
                    lineHeight: 1.8,
                  },
                  "& .MuiImageListItemBar-actionIcon": {
                    alignSelf: "flex-end",
                    ml: 1,
                    mr: 1,
                    mb: 1.5,
                  },
                  "& .MuiImageListItemBar-actionIcon:hover": {
                    scale: 1.5,
                    transition: "scale 0.4s ease",
                  },
                }}
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
                      width: { xs: "60%", md: "30%" },
                      borderRadius: 4,
                      objectFit: "cover",
                      mr: { md: 3 },
                      mb: { xs: 3, md: 0 },
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
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mt: 2,
                        color: "darkslategrey",
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.35)",
                      }}
                    >
                      Alcance de las actividades:
                    </Typography>
                    <ul
                      style={{
                        marginTop: "8px",
                        paddingLeft: "25px",
                        color: "darkslategray",
                      }}
                    >
                      {item.details.map((detail) => (
                        <li>
                          <Typography variant="subtitle1" color="textSecondary">
                            {detail}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  <IconButton
                    onClick={() => handleToggle(item)}
                    sx={{
                      color: "rgba(0, 55, 51, 0.85)",
                      scale: 1.5,
                      mt: { xs: 2, md: 0 },
                      ml: { xs: 0, md: 2 },
                    }}
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
    description: "Línea de CX200-700, CX3-20-80 (FC e iSCI), CX4-120-960.",
    details: [
      "Configuración de los Storages Processor.",
      "Creación de agrupaciones de discos.",
      "Definición de Tipos de arreglos.",
      "Creación de contenedores.",
      "Registros de HBA, servidores.",
      "Asignación de LUN's y Host.",
      "Creación de metaluns, tipos.",
      "Creación, asignación y visualización de las LUN's en ambiente de operación.",
      "Configuraciones de réplicas locales (SnapView) y remotas (MirrorView).",
    ],
  },
  {
    img: servicio2,
    title: "Sistema de almac. DELL iSCSI MD3000i y EqualLogic",
    description: "Storage Area Network (SAN).",
    details: [
      "Inicialización de storage.",
      "Configuración de los parámetros de red.",
      "Definición del tipo de arreglo.",
      "Configuración de las puertas iSCSI.",
      "Conexión de servidores al storage.",
      "Asignación de LUN's a un serevidor y sus tipos de accesos.",
      "Reconfiguraciones.",
    ],
  },
  {
    img: servicio3,
    title: "Switches de Fibra y Ethernet",
    description: "Línea Brocade, Cisco.",
    details: [
      "Configuración de switches.",
      "Zonificación mediante alias.",
      "Definición de archivo de configuración.",
      "Salvar y habilitar configuraciones.",
      "Reporte de configuraciones efectivas.",
    ],
  },
  {
    img: servicio4,
    title: "Switches iSCSI",
    description: "Línea Cisco, Powerconnect.",
    details: [
      "Configuración de los parámetros de red.",
      "Cableado de acuerdo a las mejores prácticas.",
    ],
  },
  {
    img: servicio5,
    title: "Controladores - Host Bus Adapter (HBA's)",
    description: "Línea modelos Emulex, Qlogic, HP, Sun e IBM.",
    details: [
      "Validación, instalación, configuración y registros de HBA's en storages.",
    ],
  },
  {
    img: servicio6,
    title: "Software EMC",
    description: "Powerpath vers. 3.x, 4.x y 5.x",
    details: [
      "Instalación de Powerpath y Navisphere Manager.",
      "Instalaciones de software de Backup Avamar.",
      "Configuración y presentación de volúmenes en ambiente de operación.",
      "Descubrimiento del Clariion al Navisphere Manager.",
    ],
  },
  {
    img: servicio7,
    title: "Config. y asignación de discos (LUN's) en diversos SO",
    description: "VMware, Linux, Solaris, Windows, AIX y HPUX.",
    details: [
      "Asignación de volúmenes.",
      "Presentación de volúmenes en ambiente de producción.",
      "Configuración de volúmenes para software EMC Powerpath.",
    ],
  },
  {
    img: servicio8,
    title: "Implementación de réplicas en almac. EMC/DELL Clariion",
    description:
      "SnapView (local) y MirrorView (remota), AutoSnap Manager de EqualLogic.",
    details: [
      "Creación de las LUN's privadas para réplicas.",
      "Creación de sesiones de Snap para una LUN.",
      "Creación de Clone Groups.",
      "Operaciones con Clone (sincronizar, promover, fracturar y remover).",
      "Asociar LUN targets.",
    ],
  },
  {
    img: servicio9,
    title: "Capacitaciones",
    description: "Sistemas de almacenamiento DELL/EMC y sistemas Clariion.",
    details: [
      "Capacitación en funciones avanzadas con réplicas locales y remotas en sistemas Clariion.",
      "Capacitación en la tecnología, configuración y funcionamiento de DELL/EMC Clariion.",
      "Laboratorios prácticos en configuración de arreglos de discos DELL/EMC Clariion.",
    ],
  },
  {
    img: servicio10,
    title: "Levantamiento en Implementaciones",
    description: "Config. con DELL/EMC Clariion y de Switches FC.",
    details: [
      "Tomas de muestras y análisis del comportamiento de un DEL/EMC Clariion.",
      "Tomas de muestras y análisis de Switches de fibra.",
      "Análisis de rendimiento de LUN's, Raid Groups y Storages Processor.",
    ],
  },
  {
    img: servicio11,
    title: "Servicios profesionales con VMware",
    description: "Ambientes virtuales con VMware.",
    details: [
      "Instalación VMware ESX Server en todas sus versiones y VMware Center.",
      "Definición de redes virtuales en servidores ESX.",
      "Definición de un Data Storage en servidores ESX.",
      "Configuración de Storage FC, iSCSI y NFS en servidores ESX.",
      "Instalación y configuración de VMotion, HA y DRS.",
      "Conversión de máquinas físicas a virtuales (Windows / Linux).",
      "Backup y Restore mediante BCV y VMware Data Recovery.",
      "Operaciones con máquinas virtuales.",
      "Virtualización de servidores Microsoft y Linux.",
      "Gestión de alarmas y rendimiento en servidor VMware Virtual Center y ESX.",
      "Migración de ambientes VMware ESX Server 2.x, 3.x y 4.x.",
      "Implementación de soluciones de contingencia (SRM).",
      "Troubleshooting VMware Infrastructure 3 y 4.",
      "Capacitaciones de VMware Infrastructure 3 y 4.",
    ],
  },
];
