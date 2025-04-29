// src/views/dashboard/Default/FormStatusCard.jsx

import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { blue, green, orange, red } from '@mui/material/colors';

const labelMap = {
  projectInfo: 'Project Info',
  roomTypes: 'Room Types',
  loadSelection: 'Load Selection',
  switchSelection: 'Switch Selection',
  hvacConfig: 'HVAC Config',
  sensorContacts: 'Sensors & Contacts',
  doorLockIntegration: 'Door Lock Integration',
  finalIntegration: 'Final Integration'
};

export default function FormStatusCard({ formName, completed, onClickNavigateToForm }) {
  let statusColor = red[600];
  if (completed) statusColor = green[500];

  return (
    <Card
      onClick={onClickNavigateToForm}
      sx={{
        cursor: 'pointer',
        background: `linear-gradient(145deg, ${statusColor}, ${blue[400]})`,
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 8
        }
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" color="white" fontWeight="bold">
            {labelMap[formName] || formName}
          </Typography>
          <Chip
            label={completed ? 'Completed' : 'Pending'}
            color={completed ? 'success' : 'warning'}
            sx={{
              backgroundColor: completed ? green[300] : orange[400],
              color: 'white',
              fontWeight: 'bold'
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
