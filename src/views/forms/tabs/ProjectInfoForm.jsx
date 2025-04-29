import { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Box, Paper, Typography } from '@mui/material';

const countries = ['UAE', 'India', 'Italy'];
const projectTypes = ['full', 'mock'];

export default function ProjectInfoForm({ onNext }) {
  const [form, setForm] = useState({
    crm_no: '',
    project_name: '',
    country: '',
    project_type: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission logic (for now just move to next tab)
    alert('Project Info saved!');
    
    // Trigger the onNext function to switch to the next tab
    if (onNext) {
      onNext();  // This will move to the next tab
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h5" mb={3}>
        Project Information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="CRM No"
            name="crm_no"
            value={form.crm_no}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Project Name"
            name="project_name"
            value={form.project_name}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
            variant="outlined"
          >
            {countries.map((c) => (
              <MenuItem key={c} value={c}>{c}</MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Project Type"
            name="project_type"
            value={form.project_type}
            onChange={handleChange}
            variant="outlined"
          >
            {projectTypes.map((pt) => (
              <MenuItem key={pt} value={pt}>{pt}</MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Box textAlign="right">
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}  // This will trigger the onNext function
              sx={{ px: 4, py: 1.5 }}
            >
              Save & Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
