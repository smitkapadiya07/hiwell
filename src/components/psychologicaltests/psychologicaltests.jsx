import React from 'react';
import {Box, Button, Card, CardContent, Container, Grid} from '@mui/material';
import img1 from '../../assets/psychological tests/img11.svg';
import img2 from '../../assets/psychological tests/img12.svg';
import img3 from '../../assets/psychological tests/img13.svg';
import img4 from '../../assets/psychological tests/img14.svg';
import img5 from '../../assets/psychological tests/img15.svg';
import img6 from '../../assets/psychological tests/img16.svg';
import img7 from '../../assets/psychological tests/img17.svg';
import img8 from '../../assets/psychological tests/img18.svg';

function Psychologicaltests() {
    const psychologicalTests = [
        {
            image: img1,
            title: 'Anxiety Test',
            description: 'Generalized Anxiety Disorder 7 (GAD-7) is a test used to screen for generalized anxiety disorder and measure its severity. The GAD-7 has seven items that measure the severity of various generalized anxiety disorder symptoms.'
        },
        {
            image: img2,
            title: 'Depression Test',
            description: 'The Patient Health Questionnaire 9 (PHQ-9) is a test used to screen for depression and measure its severity. It is a successful depression scale that scans quickly and easily with nine items.'
        },
        {
            image: img3,
            title: 'Traumatic Grief Test',
            description: 'Traumatic grief is the mourning process that occurs when a person with whom we have a relationship passes away as a result of an unexpected and especially bad event. This scale evaluates the severity of the aforementioned traumatic grief reactions.'
        },
        {
            image: img4,
            title: 'Post-Traumatic Stress Test',
            description: 'Post Traumatic Stress Disorder Inventory - Civil Version can be used as part of routine practice in the diagnosis and severity assessment of Post Traumatic Stress Disorder in individuals. This test is a scale that questions all DSM-IV PTSD symptoms.'
        },
        {
            image: img5,
            title: 'Social Anxiety Test',
            description: 'The Social Interaction Anxiety Scale measures social interaction anxiety, which is defined as distress when meeting and talking to other people. This psychological test provides insight into social anxiety disorder, which is fear or worry about one or more social situations.'
        },
        {
            image: img6,
            title: 'Alcohol Addiction Test',
            description: 'AUDIT (Alcohol Use Disorders Identification Test) is a simple and effective method of screening for unhealthy alcohol use, defined as risky or dangerous consumption or any alcohol use disorder.'
        },
        {
            image: img7,
            title: 'Stress Test',
            description: 'DASS21 is a psychological test that includes 7 items measuring stress symptoms that have been present for the past 1 week.'
        },
        {
            image: img8,
            title: 'Phobia Test',
            description: 'You can measure the severity of specific phobias in any body (high, closed spaces, animals, situations) and obtain scientific results.'
        },
    ];

    return (
        <>
            <Container maxWidth="lg">
                <Box textAlign="center" sx={{
                    padding:"80px 0 0 0"
                }}>
                    <Box sx={{fontSize: "40px", fontWeight: "700"}}>
                        Psychological Tests
                    </Box>
                    <Box sx={{
                        fontSize: "20px",
                        fontWeight: "400",
                        lineHeight: "150%",
                        width: {sm:'600px', xs:"70%"},
                        margin: "auto",
                        color: '#21252bc2',
                        marginBottom: "75px"
                    }}>
                        With free and online psychology tests, test yourself and learn about the level of your
                        psychological problems.
                    </Box>
                </Box>

                <Grid container spacing={3}>
                    {psychologicalTests.map((test, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                            <Box sx={{border: "1px solid #EFEFEF", borderRadius: 3,}}>
                                <Box sx={{
                                    textAlign: 'start',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: "24px",
                                }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>

                                        <Box sx={{
                                            height: '242px',
                                            width: '100%',
                                            backgroundColor: '#F9FAFF',
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img src={test.image} alt={test.title} style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 8,
                                                border: "1px solid #EFEFEF",
                                                objectFit: 'contain',
                                                backgroundColor: '#F9FAFF'
                                            }}/>
                                        </Box>

                                        <Box sx={{fontSize: "22px", margin: "25px 0px 7px 0px", fontWeight: "700"  }}>
                                            {test.title}
                                        </Box>

                                        <Box sx={{fontSize: "16px", fontWeight: "400", flexGrow: 2 ,height: '150px'}}>
                                            {test.description}
                                        </Box>

                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                py: 1.5,
                                                borderRadius: 1,
                                                fontWeight: 500,
                                                backgroundColor: '#3268F3',
                                                color: 'white',
                                                '&:hover': {backgroundColor: '#2758D1'}
                                            }}
                                        >
                                            Start
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{
                mt: 8,
                backgroundColor: "#1976D2",
                color: "white",
                py: 3,
                width: '100%',
                textAlign: "center"
            }}>
                <Box sx={{fontSize: "20px", fontWeight: "600", mb: 2}}>
                    Need help? Contact us!
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "white",
                        color: "#1976D2",
                        borderRadius: "20px",
                        px: 4,
                        py: 1,
                        fontSize: "16px",
                        fontWeight: "600",
                        '&:hover': {
                            backgroundColor: "#f0f0f0"
                        }
                    }}
                >
                    Contact Us
                </Button>
            </Box>
        </>
    );
}

export default Psychologicaltests;
