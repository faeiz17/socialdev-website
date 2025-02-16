"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

/* ✅ Custom Animated Background Hook */
function useElementDimensions(ref) {
  const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 });

  function measure() {
    if (!ref.current) return;
    setSize(ref.current.getBoundingClientRect());
  }

  useEffect(() => {
    measure();
  }, []);

  return [size, measure];
}

/* ✅ Footer Component */
export default function Footer() {
  const ref = useRef(null);
  const [{ width, height, top, left }, measure] = useElementDimensions(ref);
  const gradientX = useMotionValue(0.5);
  const gradientY = useMotionValue(0.5);
  const background = useTransform(
    () =>
      `conic-gradient(from 0deg at calc(${
        gradientX.get() * 100
      }% - ${left}px) calc(${
        gradientY.get() * 100
      }% - ${top}px), #eb3678, #4caf50 , #2196f3 , #ff9800)`
  );

  return (
    <Box
      component="footer"
      sx={{
        height: "500px",
        position: "relative",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        zIndex: 100,
      }}
      onPointerMove={(e) => {
        gradientX.set(e.clientX / width);
        gradientY.set(e.clientY / height);
      }}
    >
      {/* ✅ Animated Gradient Background */}
      <motion.div
        ref={ref}
        style={{
          background,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          filter: "blur(20px)",
        }}
        onPointerEnter={() => measure()}
      />

      {/* ✅ Contact Info */}
      <Typography
        variant="h1"
        sx={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        Connect With Us
      </Typography>

      {/* ✅ Email Link */}
      <Link
        href="mailto:orenlankri333@gmail.com"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          color: "white",
          textDecoration: "none",
          fontSize: "2rem",
          fontWeight: "500",
          "&:hover": { color: "#eb3678" },
        }}
      >
        <EmailIcon /> orenlankri333@gmail.com
      </Link>

      {/* ✅ Social Media Icons */}
      <Box
        sx={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <IconButton
          component="a"
          href="https://github.com"
          target="_blank"
          sx={{ color: "#fff", "&:hover": { color: "#ffcc00" } }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: "#fff", "&:hover": { color: "#0077b5" } }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          sx={{ color: "#fff", "&:hover": { color: "#1DA1F2" } }}
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "#fff", "&:hover": { color: "#E1306C" } }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "#fff", "&:hover": { color: "#1877F2" } }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* ✅ Copyright Text */}
      <Typography variant="body2" sx={{ marginTop: "10px", opacity: 0.8 }}>
        © 2024 Social Dev | All rights reserved.
      </Typography>
    </Box>
  );
}
