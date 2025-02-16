import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ScrollLinked from "../ScrollLinked/ScrollLinked";

function UiUx() {
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
        color="warning"
        textAlign="center"
        sx={{
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
        }}
      >
        UI/UX Design
      </Typography>

      <Box
        sx={{
          padding: "20px",

          width: { xs: "90vw", sm: "85vw", md: "75vw", lg: "60vw" }, // Responsive width
          height: { xs: "auto", sm: "auto", md: "auto" }, // Responsive height

          maxWidth: "100%", // Ensures no overflow in desktop view
          overflow: "hidden", // Prevents content from escaping
          textAlign: "center",
          color: "white",
          marginTop: "20px",

          display: "flex",
          flexDirection: "column", // Keeps ScrollLinked inside
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden", // Ensures ScrollLinked stays inside
          }}
        >
          <ScrollLinked />
        </div>
        <div>
          <Typography
            variant="h5"
            color="warning"
            textAlign="center"
            sx={{
              marginTop: "-200px",
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "1.8rem",
                lg: "2.2rem",
              }, // Responsive font size
            }}
          >
            Pixels align in graceful design, Where function and beauty
            effortlessly entwine; Interfaces whisper secrets in gentle light,
            Inviting hearts to explore digital delight.
          </Typography>
        </div>
      </Box>
    </div>
  );
}

export default UiUx;
