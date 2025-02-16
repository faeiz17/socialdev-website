import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

// ✅ Function to handle smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = element.getBoundingClientRect().top + window.scrollY - 80; // Adjust for Navbar height
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/black_twill.png')",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          padding: "20px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 3,
          }}
        >
          {/* Logo & Name */}
          <Typography variant="h4" fontWeight="bold" color="primary.main">
            SOCIAL DEV
          </Typography>

          {/* ✅ Nav Links with Scroll Function */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button
              color="warning"
              variant="text"
              sx={{ fontSize: "1.5rem", textTransform: "none" }}
              onClick={() => scrollToSection("uiux")}
            >
              UI/UX Design
            </Button>
            <Button
              color="info"
              variant="text"
              sx={{ fontSize: "1.5rem", textTransform: "none" }}
              onClick={() => scrollToSection("webdev")}
            >
              Web Development
            </Button>
            <Button
              color="success"
              variant="text"
              sx={{ fontSize: "1.5rem", textTransform: "none" }}
              onClick={() => scrollToSection("appdevelopment")}
            >
              App Development
            </Button>
            <Button
              color="error"
              variant="text"
              sx={{ fontSize: "1.5rem", textTransform: "none" }}
              onClick={() => scrollToSection("customsolutions")}
            >
              Custom Solutions
            </Button>
          </Box>

          {/* Mobile Menu */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "primary.main" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button onClick={() => scrollToSection("uiux")}>
            <ListItemText primary="UI/UX Design" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection("webdev")}>
            <ListItemText primary="Web Development" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection("appdevelopment")}>
            <ListItemText primary="App Development" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Custom Solutions" />
          </ListItem>
        </List>
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
