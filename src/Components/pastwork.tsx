import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project Three",
    description: "A brief description of project three.",
    image: "https://via.placeholder.com/150",
  },
];

const Projects = () => {
  return (
    <>
      <section style={{ backgroundColor: "#F5F5F5", padding: "50px 0" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: 600 }}
          >
            Projects
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={3} style={{ borderRadius: "12px" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "30px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h5"
            style={{ fontStyle: "italic", fontWeight: 500 }}
          >
            "Building the future, one project at a time."
          </Typography>
        </Container>
      </section>
    </>
  );
};

export default Projects;
