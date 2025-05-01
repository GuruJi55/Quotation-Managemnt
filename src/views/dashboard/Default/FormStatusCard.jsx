
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
  IconButton,
  Tooltip,
  Grid,
} from '@mui/material';
import { CheckCircle, HourglassEmpty, Warning } from '@mui/icons-material';
import { green, orange, red, grey, blue } from '@mui/material/colors';

const labelMap = {
  projectInfo: 'Project Info',
  roomTypes: 'Room Types',
  loadSelection: 'Load Selection',
  switchSelection: 'Switch Selection',
  hvacConfig: 'HVAC Config',
  sensorContacts: 'Sensors & Contacts',
  doorLockIntegration: 'Door Lock Integration',
  finalIntegration: 'Final Integration',
};

export default function FormStatusCard({ formName, completed, progress, onClickNavigateToForm }) {
  const statusColor = completed ? green[600] : progress > 0 ? orange[600] : red[600];
  const icon = completed ? <CheckCircle /> : progress > 0 ? <HourglassEmpty /> : <Warning />;
  const chipLabel = completed ? 'Completed' : 'In Progress';
  const chipColor = completed ? 'success' : 'warning';

  return (
    <Card
      onClick={onClickNavigateToForm}
      sx={{
        borderRadius: 3,
        background: `linear-gradient(135deg, ${blue[500]}, ${statusColor})`,
        transition: '0.3s',
        boxShadow: 6,
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 12,
          transform: 'translateY(-5px)',
        },
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        {/* Header with form name and status icon */}
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" color="white" fontWeight={600}>
            {labelMap[formName] || formName}
          </Typography>
          <Tooltip title={chipLabel}>
            <IconButton sx={{ color: 'white' }}>{icon}</IconButton>
          </Tooltip>
        </Grid>

        {/* Progress bar */}
        <LinearProgress
          variant="determinate"
          value={completed ? 100 : progress}
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: grey[300],
            '& .MuiLinearProgress-bar': {
              backgroundColor: statusColor,
            },
          }}
        />

        {/* Chip with the status */}
        <Box mt={2}>
          <Chip
            label={chipLabel}
            color={chipColor}
            variant="filled"
            sx={{
              backgroundColor: completed ? green[500] : orange[500],
              color: 'white',
              fontWeight: 'bold',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
