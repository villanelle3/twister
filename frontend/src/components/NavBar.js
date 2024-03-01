import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CreateIcon from "@mui/icons-material/Create";
import { Link, useLocation } from "react-router-dom";


function NavBar(props) {
    const { window, drawerWidth, content } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
        setMobileOpen(!mobileOpen);
        }
    };

    const location = useLocation();
    const path = location.pathname;

    const drawer = (
    <div>
        <Toolbar />
        <List>
            <ListItem disablePadding>
            <ListItemButton component={Link} to="/" selected={"/" === path}>
                <ListItemIcon>
                <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
            </ListItemButton>
            </ListItem>
        <ListItem disablePadding>
            <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                <ListItemIcon>
                <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
            </ListItemButton>
            </ListItem>

        <ListItem disablePadding>
            <ListItemButton component={Link} to="/create" selected={"/create" === path}>
                <ListItemIcon>
                <CreateIcon />
                </ListItemIcon>
                <ListItemText primary={"Create"} />
            </ListItemButton>
            </ListItem>
        </List>
        </div>
    );

  // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            }}
        >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Twister
            </Typography>
        </Toolbar>
        </AppBar>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Toolbar />
            {content}
        </Box>
        </Box>
    );
}

export default NavBar;
