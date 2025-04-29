// src/views/dashboard/Default/ProjectSummaryCard.jsx

import { Card, CardContent, Typography, Box, LinearProgress, Chip } from '@mui/material';
import { green, orange, red, blue } from '@mui/material/colors';

export default function ProjectSummaryCard({ isLoading, formStatus }) {
  if (isLoading) {
    return (
      <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 2, background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)' }}>
        <CardContent>
          <Typography variant="h6" color="text.primary">Loading project summary...</Typography>
        </CardContent>
      </Card>
    );
  }

  const completedForms = Object.keys(formStatus).filter((key) => formStatus[key]).length;
  const totalForms = Object.keys(formStatus).length;

  const progress = (completedForms / totalForms) * 100;

  let statusColor = green[500];
  if (progress < 50) statusColor = red[500];
  else if (progress < 75) statusColor = orange[500];

  return (
    <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 2, background: 'linear-gradient(135deg, #eceff1, #cfd8dc)' }}>
      <CardContent>
        <Typography variant="h6" color="text.primary" fontWeight="bold">
          Project Summary
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body1" color="text.secondary">
            {completedForms} of {totalForms} forms completed.
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ marginTop: 1, height: 8, borderRadius: 1 }} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Chip label="Forms Completed" color="primary" variant="filled" />
          <Chip label={`${Math.round(progress)}%`} color="success" variant="outlined" />
        </Box>
      </CardContent>
    </Card>
  );
}
