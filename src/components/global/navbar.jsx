import React, {useEffect} from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Menu,
    MenuItem,
    IconButton,
    Drawer,
    List,
    ListItem, ListItemText, Select, Collapse
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import logo from '../../assets/global/logo.jpg'
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";


const Navbar = () => {
    //
    // const languages = [
    //     {code: "en", name: "English", flag: ""},
    //     {code: "el", name: "Ελληνικά", flag: "🇬🇷"},
    //     {code: "pt", name: "Portuguese", flag: "🇵🇹"},
    //     {code: "es", name: "Spanish", flag: "🇪🇸"},
    //     {code: "fr", name: "French", flag: "🇫🇷"},
    //     {code: "it", name: "Italian", flag: "🇮🇹"},
    //     {code: "tr", name: "Türkçe", flag: "🇹🇷"},
    //     {code: "ro", name: "Română", flag: "🇷🇴"},
    // ];
    //
    // const [anchorEl, setAnchorEl] = useState(null);
    // const [selectedLang, setSelectedLang] = useState(languages[0]); // Default: English
    //
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    //
    // const handleClose = (lang) => {
    //     if (lang) setSelectedLang(lang);
    //     setAnchorEl(null);
    // };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    //     setOpenSubmenu(null);
    // };
    //
    //
    // const handleMenuOpen = (event, menu) => {
    //     if (!isMobile && !mobileMenuOpen) {
    //         setAnchorEl(event.currentTarget);
    //         setOpenSubmenu(menu);
    //     }
    // };

    const menuItems = ["How It Works", "About Us", "Psychotherapists", "Business", "Psychological Tests", "Join Us"];

    return (
        <AppBar color="#000" elevation={0} sx={{
            padding:"20px 24px",
            position:"sticky",
            zIndex: 999,
            backgroundColor:"#fff"
        }}>
            <Toolbar sx={{justifyContent: "space-between"}}>
                <Box sx={{height: "70px", width: "70px"}}>
                    <img src={logo} alt="logo" style={{height:"100%" ,width:"100%"}} />
                </Box>

                <Box sx={{display: {xs: "none", lg: "flex"}, gap: 3}}>
                    {menuItems.map((text, index) => (
                        <Typography key={index} sx={{fontWeight: 700, color: "#000"}}>
                            {text}
                        </Typography>
                    ))}
                </Box>

                <Box sx={{display: {xs: "none", lg: "flex"}, alignItems: "center", gap: 2}}>
                    <Button variant="outlined"
                            sx={{color: "#0B5ED7", borderColor: "#0B5ED7", fontSize: "16px"}}>Login</Button>
                    <Button variant="contained"
                            sx={{backgroundColor: "#0B5ED7", color: "white", fontSize: "16px"}}>Register</Button>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton
                    sx={{display: {xs: "block", lg: "none"}}}
                    edge="end"
                    color="inherit"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>

            <Collapse
                in={mobileMenuOpen}
                timeout="auto"
                className={"glassmorphism"}
                sx={{
                    display: {xs: "flex", lg: "none"},
                    p: 0,
                    position: 'fixed',
                    top: 84,
                    width: '100%',
                }}
            >
                <List sx={{color: "#000", padding: "0 8px"}}>
                    {menuItems.map((item, index) => (
                        <Box key={index}>
                            <Typography sx={{padding: "16px 0", fontWeight: 700}}>
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </List>
                <Box sx={{display: {xs: "flex", lg: "none"}, alignItems: "center", gap: 2}}>
                    <Button variant="outlined" sx={{
                        color: "#0B5ED7",
                        borderColor: "#0B5ED7",
                        fontSize: "16px",
                        borderRadius: "16px",
                        padding: "6px 20px"
                    }}>Login</Button>
                    <Button variant="contained" sx={{
                        backgroundColor: "#0B5ED7",
                        color: "white",
                        fontSize: "16px",
                        borderRadius: "16px",
                        padding: "6px 20px"
                    }}>Register</Button>
                </Box>
            </Collapse>

        </AppBar>
    );
};

export default Navbar;
