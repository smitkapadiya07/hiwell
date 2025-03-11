import React from "react";
import {Box, Grid, Button, Divider, Container} from "@mui/material";
import logo from "../../assets/global/logo.jpg";
import img1 from "../../assets/global/app-apple.svg";
import img2 from "../../assets/global/app-android.svg";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";

const footerData = {
    image: logo,
    description: "With more than 1600 expert psychologists on our platform, you can start online therapy and psychological counseling right away!",
    appLinks: [
        {name: "App Store", image: img1},
        {name: "Google Play", image: img2}
    ],
    sections: [
        {
            title: "Emotionally Yours",
            links: [
                "Psychotherapists", "How It Works", "Business", "Blog", "FAQs", "About Us", "Contact Us"
            ]
        },
        {
            title: "Popular Articles",
            links: [
                "Effects of Social Media", "Developing and Strengthening Willpower", "What is Self-Compassion and How to Practice it?",
                "How to Build Self-Confidence", "What are Attachment Styles?", "What is Schema Chemistry?",
                "Why is Therapy for Everyone?", "Cognitive Behavioral Therapy"
            ]
        },
        {
            title: "Psychological Tests",
            links: [
                "Depression Test", "Anxiety Test", "Stress Test", "Traumatic Grief Test", "Post-Traumatic Stress Test",
                "Alcohol Addiction Test", "Social Anxiety Test"
            ]
        },
        {
            title: "Privacy and Security",
            links: ["Privacy Policy", "User Terms and Conditions", "Cookie Notice"]
        }
    ]
};

const Footer = () => {
    return (
        <Box sx={{padding: "0px 20px 20px 20px"}}>
            <Container maxWidth="xl">
                <Box sx={{
                    padding: "3rem 0 3rem 0"
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={12} lg={4}>
                            <Box sx={{
                                padding: "0 12px",
                            }}>
                                <Box
                                    sx={{
                                        height: "70px",
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                >
                                    <img
                                        src={footerData.image}
                                        alt="Hiwell Logo"
                                        style={{
                                            height: "100%",
                                            width: "auto",
                                            cursor: "pointer"
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    fontSize: "14px",
                                    color: "#212529",
                                    margin: "24px 0 0",
                                    opacity: ".8",
                                    fontWeight: "300",

                                }}>
                                    {footerData.description}
                                </Box>
                                <Box sx={{
                                    fontSize: "16px",
                                    margin: "24px 0 0",
                                    color: "#212529",
                                    fontWeight: "500",

                                }}>
                                    Get the App
                                </Box>
                                <Box sx={{
                                    margin: "0 0 24px",
                                    display: "flex",
                                    cursor: "pointer"
                                }}>
                                    {footerData.appLinks.map((app, index) => (
                                        <Box key={index} sx={{margin: "8px 0 0 0", padding: "4px",}}>
                                            <img src={app.image} alt={app.name} width={120}/>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        {footerData.sections.map((section, index) => (
                            <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                                <Box sx={{
                                    padding: "0 12px",
                                }}>
                                    <Box sx={{
                                        fontSize: "16px",
                                        color: "#212529",
                                        fontWeight: "600",
                                        mb: 2
                                    }}>
                                        {section.title}
                                    </Box>
                                    {section.links.map((link, idx) => (
                                        <Box key={idx} sx={{
                                            padding: "8px 0",
                                            color: "#000",
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            cursor: "pointer",
                                            "&:hover": {
                                                textDecoration: "underline",
                                            },
                                        }}>
                                            {link}
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{
                    padding: "0 0 24px",
                    color: "#848484",
                    fontSize: "14px",
                    fontWeight: "300",
                    textAlign: "center"
                }}>
                    If you feel that you are in a crisis or that another person is in danger, do not use this site.
                    Consult these resources to get the right help right away.
                </Box>
                <Divider sx={{color: "#000", mt: 3}}/>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 12px",
                        mt: 2,
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "16px",
                            color: "#848484",
                            fontWeight: "300",
                        }}
                    >
                        &copy; Emotionally Yours
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook
                                sx={{
                                    fontSize: "35px",
                                    color: "#668ebf",
                                    cursor: "pointer",
                                    transition: "color 0.3s",
                                    border: "1px solid #7295bf",
                                    borderRadius: "50%",
                                    padding: "8px",
                                    margin: "0 4px",
                                    "&:hover": { color: "#1877F2", border: "1px solid #1877F2" },
                                }}
                            />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter
                                sx={{
                                    fontSize: "35px",
                                    color: "#668ebf",
                                    cursor: "pointer",
                                    transition: "color 0.3s",
                                    border: "1px solid #7295bf",
                                    borderRadius: "50%",
                                    padding: "8px",
                                    margin: "0 4px",
                                    "&:hover": { color: "#1877F2", border: "1px solid #1877F2" },
                                }}
                            />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram
                                sx={{
                                    fontSize: "35px",
                                    color: "#668ebf",
                                    cursor: "pointer",
                                    transition: "color 0.3s",
                                    border: "1px solid #7295bf",
                                    borderRadius: "50%",
                                    padding: "8px",
                                    margin: "0 4px",
                                    "&:hover": { color: "#1877F2", border: "1px solid #1877F2" },
                                }}
                            />
                        </a>
                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default Footer;