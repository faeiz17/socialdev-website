import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Typewriter from "typewriter-effect";
import UiUx from "../components/UIUX/UiUx";
import Webdev from "../components/webdev/Webdev";
import AppDevelopment from "../components/App dev/AppDevelopment";
import CustomSolutions from "../components/Custom Solutions/CustomSolutions";
import OurTeam from "../components/Our Team/OurTeam";
function Homepage() {
  return (
    <>
      <Box
        sx={{
          overflowX: "hidden",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          color="default"
          sx={(theme) => ({
            overflow: "visible",
            fontWeight: "bold",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
              xl: "6rem",
            },
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            background: `linear-gradient(90deg, ${theme.palette.secondary.light} 50%, ${theme.palette.text.primary} 50%)`,
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transition: "background-position 0.5s ease-in-out",
            "&:hover": {
              backgroundPosition: "0 0",
            },
          })}
        >
          ~&quot;We deliver one innovative idea at a time.&quot;~
        </Typography>
      </Box>

      <Typography variant="h2" color="default" textAlign="center">
        Our Services
      </Typography>

      <Typography
        variant="h4"
        color="default"
        sx={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          fontSize: {
            xs: ".5rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "2rem",
            xl: "2.5rem",
          },
          lineHeight: "1.5",
          letterSpacing: "-0.02em",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        <Typewriter
          options={{
            strings: [
              "We are a passionate team of young software engineers dedicated to delivering high-quality digital solutions.",
            ],
            cursor: "|",
            delay: 1,
            autoStart: true,
            loop: true,
            contentType: "text",
          }}
        />
      </Typography>

      {/* ✅ Assign IDs for Smooth Scrolling */}
      <Box id="uiux">
        <UiUx />
      </Box>

      <Box id="webdev">
        <Webdev />
      </Box>

      <Box id="appdevelopment">
        <AppDevelopment />
      </Box>
      <Box id="customsolutions">
        <CustomSolutions />
      </Box>
      <Box id="ourteam">
        <OurTeam />
      </Box>
    </>
  );
}

export default Homepage;
