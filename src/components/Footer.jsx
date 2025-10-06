import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const form = useRef();

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
          alert("Mensaje enviado correctamente");
          form.current.reset();
        },
        (error) => {
          console.log("Error al enviar el correo", error);
          alert("Hubo un error al enviar el correo. Intente nuevamente");
        }
      );
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        mt: 8,
        p: { xs: 3, sm: 6 },
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Nimbus Technology Ltda.
          </Typography>
          <Typography variant="body2">
            Equipos y servicios tecnológicos para empresas y particulares.
            Instalación, mantenimiento y soporte técnico.
          </Typography>
          <br />
          <Typography>Nuestra oficina:</Typography>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4708.963249739537!2d-70.61950552794401!3d-33.43002625599174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6329c10f99%3A0x800eaa0e2909c972!2sDr.%20Manuel%20Barros%20Borgo%C3%B1o%20110%2C%207500589%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1759788346547!5m2!1ses-419!2scl"
            width="100%"
            height="200"
            loading="lazy"
            style={{
              border: 0,
              borderRadius: "8px",
              marginTop: "0.5rem",
            }}
            allowFullScreen
          ></Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Enlaces
          </Typography>
          <Typography
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }}
            variant="body2"
          >
            Inicio
          </Typography>
          <br />
          <Typography
            component={Link}
            to="/about"
            sx={{ textDecoration: "none", color: "inherit" }}
            variant="body2"
          >
            Sobre nosotros
          </Typography>
          <br />
          <Typography
            component={Link}
            to="/contact"
            sx={{ textDecoration: "none", color: "inherit" }}
            variant="body2"
          >
            Contacto
          </Typography>
          <br />
          <Typography
            component={Link}
            to="/services"
            sx={{ textDecoration: "none", color: "inherit" }}
            variant="body2"
          >
            Servicios
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Envíanos tu consulta
          </Typography>
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              name="user_email"
              label="Tu correo"
              variant="filled"
              size="small"
              required
              fullWidth
              slotProps={{
                style: { backgroundColor: "#fff", borderRadius: 4 },
              }}
            ></TextField>
            <TextField
              name="message"
              label="Tu mensaje"
              variant="filled"
              size="small"
              multiline
              rows={4}
              required
              fullWidth
              slotProps={{
                style: { backgroundColor: "#fff", borderRadius: 4 },
              }}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ alignSelf: "flex-start", mt: 1 }}
            >
              Enviar
            </Button>
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
  );
}
