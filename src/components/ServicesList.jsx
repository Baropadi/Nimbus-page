import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
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
        m: 2.5,
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
                    ? "0px 4px 20px rgba(0,0,0,0.8)"
                    : "0px 2px 10px rgba(0,0,0,0.2)",
                transition: "all 0.5s ease",
              }}
            >
              <img
                src={`${item.img}?w=400&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    onClick={() => handleToggle(item)}
                    sx={{ color: "rgba(255,255,255,0.85)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
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
                    <InfoIcon />
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
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at odio id turpis gravida tincidunt. Proin uturna libero.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
    details:
      "Integer vulputate faucibus nisl, ut luctusnisl blandit at. Sed sit amet justo at velit bibendumtincidunt non et risus.",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
    details:
      "Consectetur adipiscing elit. Praesent at odio id turpis gravida tincidunt. Proin uturna libero. Integer vulputate faucibus nisl, ut luctusnisl blandit at.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    details: "Sed sit amet justo at velit bibendumtincidunt non et risus.",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    details:
      "Turpis gravida tincidunt. Proin uturna libero. Integer vulputate faucibus nisl, ut luctusnisl blandit at. Sed sit amet justo at velit bibendumtincidunt non et risus.",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    details:
      "Libero. Integer vulputate faucibus nisl, ut luctusnisl blandit at. Sed sit amet justo at velit bibendumtincidunt non et risus.",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
    details:
      "Vulputate faucibus nisl, ut luctusnisl blandit at. Sed sit amet justo at velit bibendumtincidunt non et risus.",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
    details:
      "Tincidunt. Proin uturna libero. Integer vulputate faucibus nisl. Sed sit amet justo at velit bibendumtincidunt non et risus.",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    details:
      "Lid turpis gravida tincidunt. Proin uturna libero. Integer vulputate faucibus nisl, ut luctusnisl blandit at. Sed sit amet justo at velit bibendumtincidunt non et risus.",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
    details:
      "Luctusnisl blandit at. Sed sit amet justo at velit bibendumtincidunt non et risus, gravida tincidunt.",
  },
];
