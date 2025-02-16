import MarqueeComp from "../Marquee/MarqueeComp";
import Typography from "@mui/material/Typography";

function Webdev() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <Typography
        variant="h3"
        color="info"
        textAlign="center"
        sx={{
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
        }}
      >
        Web Development
      </Typography>
      <MarqueeComp />
      <div>
        <Typography
          variant="h5"
          color="info"
          textAlign="center"
          sx={{
            margin: "50px",
            marginBottom: "100px",
            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
              md: "1.8rem",
              lg: "2.2rem",
            }, // Responsive font size
          }}
        >
          HTML, CSS, and JavaScript craft the digital blueprint we weave, React,
          Next.js, and Redux spark interactive dreams we believe; Node, Express,
          Mongo, and Firebase power our backend might with grace, While
          Tailwind, Bootstrap, Sass, Git, GitHub, Docker, GraphQL, and Python
          shape our creative space.
        </Typography>
      </div>
    </div>
  );
}

export default Webdev;
