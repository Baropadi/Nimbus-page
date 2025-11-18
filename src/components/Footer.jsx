import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const form = useRef();

  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLICKEY
      )
      .then(
        () => {
          setSnackbarMessage(
            "¡Gracias por contactarte con nosotros! Te responderemos pronto."
          );
          setSnackbarSeverity("success");
          form.current.reset();
        },
        (error) => {
          setSnackbarMessage(
            "Hubo un error al enviar el correo. Intente nuevamente"
          );
          setSnackbarSeverity("error");
          console.log("Error al enviar el correo", error);
        }
      );
    setOpen(true);
  };

  return (
    <Container maxWidth="xl" className="footer">
      <Box
        component="footer"
        sx={{
          color: "white",
          p: { xs: 3, sm: 6 },
        }}
      >
        <Grid container spacing={5}>
          <Grid>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              Nimbus Technology Ltda.
            </Typography>
            <Typography variant="body2">
              Equipos y servicios tecnológicos para empresas y particulares.
              Instalación, mantenimiento y soporte técnico.
              <br />
              Ayudamos a nuestros clientes a abrir casos con el soporte técnico
              de Dell Technologies en caso de ser requerido, ofrecemos apoyo en
              la actualización de firmware de los distintos equipos bajo
              garantía, y además a configurar upgrade de todo equipamiento como
              Partner de{" "}
              <Typography
                className="contact-link"
                variant="body2"
                component="a"
                href="https://www.nouschile.cl/tecnologia-de-punta/datacenter-infraestructura/equipos-dell/?gad_source=1&gad_campaignid=22611294446&gclid=CjwKCAjwgeLHBhBuEiwAL5gNETyyNCANnoq5KteRrEJhY9LTUqAF3EGOwl6ClUJiKxl7PYwySbN25BoCdRYQAvD_BwE"
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "inline-block",
                  transition: "transform 0.2s ease, color 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.01)",
                    color: "gold",
                  },
                }}
              >
                Dell Technologies.
              </Typography>
            </Typography>

            <Box
              sx={{
                borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                textAlign: "center",
                mt: 4,
                mb: 3,
              }}
            ></Box>
            <Typography
              sx={{
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              Nuestra oficina:
            </Typography>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4708.963249739537!2d-70.61950552794401!3d-33.43002625599174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6329c10f99%3A0x800eaa0e2909c972!2sDr.%20Manuel%20Barros%20Borgo%C3%B1o%20110%2C%207500589%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1759788346547!5m2!1ses-419!2scl"
              width="100%"
              height="200"
              loading="lazy"
              style={{
                border: 0,
                borderRadius: "8px",
                marginTop: "1rem",
                marginBottom: "0.5rem",
              }}
              allowFullScreen
            ></Box>
            <Box>
              <Typography>
                Barros Borgoño 110, Oficina 809, Providencia, Santiago, Chile.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 8, sm: 4, md: 4 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              Enlaces
            </Typography>
            <Typography
              className="footer-link"
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "inherit" }}
              variant="body2"
            >
              Inicio
            </Typography>
            <br />
            <Typography
              className="footer-link"
              component={Link}
              to="/about"
              sx={{ textDecoration: "none", color: "inherit" }}
              variant="body2"
            >
              Sobre nosotros
            </Typography>
            <br />
            <Typography
              className="footer-link"
              component={Link}
              to="/contact"
              sx={{ textDecoration: "none", color: "inherit" }}
              variant="body2"
            >
              Contacto
            </Typography>
            <br />
            <Typography
              className="footer-link"
              component={Link}
              to="/services"
              sx={{ textDecoration: "none", color: "inherit" }}
              variant="body2"
            >
              Servicios
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 8 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              Envíanos tu consulta:
            </Typography>
            <Box
              id="contact-form"
              component="form"
              ref={form}
              onSubmit={sendEmail}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                name="user_email"
                label="Tu correo"
                variant="filled"
                size="medium"
                color="inherit"
                required
                slotProps={{
                  input: {
                    style: {
                      backgroundColor: "white",
                      borderRadius: "4px",
                    },
                  },
                }}
              ></TextField>
              <TextField
                fullWidth
                name="message"
                label="Tu mensaje"
                variant="filled"
                size="medium"
                color="inherit"
                multiline
                rows={4}
                required
                slotProps={{
                  input: {
                    style: {
                      backgroundColor: "white",
                      borderRadius: "4px",
                    },
                  },
                }}
              ></TextField>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  mt: 1,
                  color: "white",
                  backgroundColor: "rgba(48, 112, 93, 1)",
                  "&:hover": {
                    backgroundColor: "rgba(62, 147, 110, 1)",
                  },
                }}
              >
                Enviar
              </Button>

              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity={snackbarSeverity}
                  sx={{ width: "100%" }}
                >
                  {snackbarMessage}
                </Alert>
              </Snackbar>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            textAlign: "center",
            mt: 4,
            pt: 2,
          }}
        >
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Nimbus Technology Ltda. Todos los
            derechos reservados.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
