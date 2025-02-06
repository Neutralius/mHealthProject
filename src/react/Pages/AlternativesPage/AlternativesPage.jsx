import React from 'react';
import {
    Stack,
    Container,
    Typography,
    Paper,
    IconButton, Button,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PropTypes from 'prop-types';
import AppLogo from '../../../assets/favicon.svg';
import medAlternativesData from './medAlternativesData.js';
import MedAlternativesCard from '../../Components/MedAlternatives/MedAlternativesCard.jsx';
import {useNavigate} from "react-router-dom";


const AlternativesPage = ({ darkMode, setDarkMode }) => {
    const navigate = useNavigate()
    const borderRadius = 6;

    return (
        <Stack
            direction="row"
            justifyContent="center"
            sx={{
                width: '100%',
                height: '100%',
                paddingTop: (theme) => theme.spacing(5),
                paddingBottom: (theme) => theme.spacing(5),
            }}
        >
            <Container
                maxWidth="sm"
                disableGutters
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    marginBottom={2}
                >
                    <img
                        src={AppLogo}
                        alt="AppLogo"
                        style={{
                            width: '50px',
                            height: '50px',
                            marginRight: '16px',
                        }}
                    />
                    <Typography variant="h5" fontWeight="bold">
                        Alternative Anlaufstellen
                    </Typography>
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={() => setDarkMode(!darkMode)}
                        color="inherit"
                    >
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Stack>
                <Paper
                    elevation={6}
                    sx={{
                        flex: '1 1 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: 2,
                        paddingRight: 1,
                        paddingBottom: 2,
                        paddingLeft: 1,
                        overflow: 'hidden',
                        borderRadius: (theme) => theme.spacing(borderRadius),
                        background: (theme) => theme.palette.grey[900],
                    }}
                >
                    <Stack
                        flex="1 1 auto"
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            overflow: 'hidden',
                            borderRadius: (theme) => theme.spacing(borderRadius),
                            background: (theme) => theme.palette.background.paper,
                        }}
                    >
                        <Container
                            maxWidth={false}
                            disableGutters
                            sx={{
                                height: '100%',
                                width: '100%',
                                padding: 2,
                                overflowY: 'auto', // Scrollbar für viele Alternativen
                            }}
                        >
                            {/* Karten mit Alternativen */}
                            {medAlternativesData.map((medInfo) => (
                                <MedAlternativesCard
                                    key={medInfo.id}
                                    name={medInfo.name}
                                    telefon={medInfo.telefon}
                                    website={medInfo.website}
                                    erreichbarkeit={medInfo.erreichbarkeit}
                                />

                            ))}
                        </Container>
                    </Stack>
                    <Button
                        variant="contained"
                        sx={{
                            position: 'absolute', // Fixierte Position innerhalb des Containers
                            bottom: '40px', // Weiter nach oben verschoben
                            left: '20px', // Auf die linke Seite verschoben
                            minWidth: '120px', // Schmaler Button
                            padding: '6px 12px', // Kompakte Größe
                            backgroundColor: '#007BFF', // Blaue Primärfarbe
                            color: '#fff',
                            borderRadius: '8px', // Abgerundete Ecken
                            fontSize: '0.875rem', // Kleinere Schriftgröße
                            textTransform: 'none', // Kein Großbuchstaben-Text
                            '&:hover': {
                                backgroundColor: '#0056b3', // Dunklere Farbe beim Hover
                            },
                        }}
                        onClick={() => navigate('/')} // Navigation zur Hauptseite
                    >
                        Zurück
                    </Button>

                </Paper>
            </Container>
        </Stack>
    );
};

AlternativesPage.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
};

export default AlternativesPage;
