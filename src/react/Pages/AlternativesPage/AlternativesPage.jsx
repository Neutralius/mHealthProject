import React from 'react';
import {
    Stack,
    Container,
    Typography,
    Paper,
    IconButton,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PropTypes from 'prop-types';
import AppLogo from '../../../assets/favicon.svg';
import medAlternativesData from './medAlternativesData';
import MedAlternativesCard from '../../Components/MedAlternatives/MedAlternativesCard';

const AlternativesPage = ({ darkMode, setDarkMode }) => {
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
                {/* Header */}
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
                        Alternative Krankenhäuser
                    </Typography>
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={() => setDarkMode(!darkMode)}
                        color="inherit"
                    >
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Stack>

                {/* Content */}
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
