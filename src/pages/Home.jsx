import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      className="home"
      sx={{
        height: "100vh",
        backgroundImage: "url('/src/assets/FondoHome1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography variant="h2" sx={{ width: "100%", fontWeight: "bold", m: 2 }}>
        Bienvenido a Nimbus Technology
      </Typography>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", width: "100%", m: 3 }}
      >
        Ofrecemos soluciones tecnológicas para empresas y particulares.
      </Typography>
    </Box>
  );
}

export default Home;
