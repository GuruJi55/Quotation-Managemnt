import { Card, CardContent, Typography, Box, Chip, LinearProgress, IconButton, Tooltip } from '@mui/material';
import { blue, green, orange, red } from '@mui/material/colors';
import { CheckCircle, HourglassEmpty, Warning } from '@mui/icons-material'; // Importing icons

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

export default function FormStatusCard({ formName, completed, progress, onClickNavigateToForm }) {
  let statusColor = red[600];
  let icon = <Warning sx={{ color: 'white' }} />;
  let progressColor = orange[400];

  // Change status color and icon based on form completion
  if (completed) {
    statusColor = green[500];
    icon = <CheckCircle sx={{ color: 'white' }} />;
    progressColor = green[300];
  } else if (progress > 0) {
    statusColor = orange[400];
    icon = <HourglassEmpty sx={{ color: 'white' }} />;
    progressColor = orange[300];
  }

  return (
    <Card
      onClick={onClickNavigateToForm}
      sx={{
        cursor: 'pointer',
        background: `linear-gradient(145deg, ${statusColor}, ${blue[400]})`,
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
          
          <Tooltip title={completed ? 'This form is completed' : 'This form is in progress'}>
            <IconButton sx={{ color: 'white' }} aria-label="status-icon">
              {icon}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Progress bar to show completion */}
        <LinearProgress
          variant="determinate"
          value={completed ? 100 : progress}
          sx={{
            marginTop: 1,
            height: 10,
            borderRadius: 1,
            backgroundColor: '#f0f0f0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: progressColor,
            },
          }}
        />

        {/* Displaying chip */}
        <Chip
          label={completed ? 'Completed' : 'Pending'}
          color={completed ? 'success' : 'warning'}
          sx={{
            backgroundColor: completed ? green[300] : orange[400],
            color: 'white',
            fontWeight: 'bold',
            marginTop: 1
          }}
        />
      </CardContent>
    </Card>
  );
}
