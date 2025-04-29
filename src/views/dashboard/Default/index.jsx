import { useEffect, useState } from 'react';
import { Grid, Box, Paper, Typography, Button } from '@mui/material';

import { gridSpacing } from 'store/constant';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// Replace these with your actual forms or status cards
import FormStatusCard from './FormStatusCard';
import ProjectSummaryCard from './ProjectSummaryCard';

export default function ProjectDashboard() {
  const [isLoading, setLoading] = useState(true);
  const [formStatus, setFormStatus] = useState({
    projectInfo: false,
    roomTypes: false,
    loadSelection: false,
    switchSelection: false,
    hvacConfig: false,
    sensorContacts: false,
    doorLockIntegration: false,
    finalIntegration: false
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const isAllFormsCompleted = Object.values(formStatus).every(status => status);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={4}>
        <ProjectSummaryCard isLoading={isLoading} formStatus={formStatus} />
      </Grid>

      <Grid item xs={12} md={8}>
        <Grid container spacing={gridSpacing}>
          {Object.entries(formStatus).map(([formName, completed], idx) => (
            <Grid item xs={12} sm={6} key={formName}>
              <FormStatusCard
                formName={formName}
                completed={completed}
                onClickNavigateToForm={() => {/* Navigate to form/tab */}}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {isAllFormsCompleted && (
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button variant="contained" color="success">
              Download Project Summary
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
