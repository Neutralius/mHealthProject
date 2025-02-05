import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom' // React Router für Navigation

const HospitalModal = ({ open, onClose, hospital }) => {
    const navigate = useNavigate(); // React Router Hook für Navigation

    if (!hospital) return null; // Falls keine Daten vorhanden sind

    const handleNavigateToAlternatives = () => {
        navigate('/alternatives'); // Navigiere zur Alternativ-Seite
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="hospital-details-title"
            aria-describedby="hospital-details-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography id="hospital-details-title" variant="h6" component="h2">
                    {hospital.Name}
                </Typography>
                <Typography id="hospital-details-description" sx={{ mt: 2 }}>
                    <strong>Wartende Patienten:</strong> {hospital.Patienten}
                </Typography>
                <Typography sx={{ mt: 1 }}>
                    <strong>Aktuelle Wartezeit:</strong> {hospital.Wartezeit}
                </Typography>
                <Button
                    onClick={handleNavigateToAlternatives} // Navigiere zur Alternativ-Seite
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Weitere Alternativen
                </Button>
            </Box>
        </Modal>
    );
};

HospitalModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    hospital: PropTypes.object, // Die Krankenhausdaten
};

export default HospitalModal;
