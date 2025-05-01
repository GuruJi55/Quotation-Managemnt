import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Box,
  Paper,
  Typography
} from '@mui/material';

const countries = ['UAE', 'India', 'Italy'];
const projectTypes = ['full', 'mock'];

export default function ProjectInfoForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    crm_no: '',
    project_name: '',
    country: '',
    project_type: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on input
  };

  const validate = () => {
    const newErrors = {};
    if (!form.crm_no.trim()) newErrors.crm_no = 'CRM No is required';
    if (!form.project_name.trim()) newErrors.project_name = 'Project Name is required';
    if (!form.country) newErrors.country = 'Country is required';
    if (!form.project_type) newErrors.project_type = 'Project Type is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const now = new Date();
    const newProject = {
      crm: form.crm_no,
      name: form.project_name,
      country: form.country,
      project_type: form.project_type,
      createdDate: now.toLocaleDateString(),
      createdTime: now.toLocaleTimeString()
    };

    const existingProjects = JSON.parse(localStorage.getItem('projectData')) || [];
    existingProjects.push(newProject);
    localStorage.setItem('projectData', JSON.stringify(existingProjects));

    if (onNext) onNext();
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
            error={Boolean(errors.crm_no)}
            helperText={errors.crm_no}
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
            error={Boolean(errors.project_name)}
            helperText={errors.project_name}
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
            error={Boolean(errors.country)}
            helperText={errors.country}
            variant="outlined"
          >
            {countries.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
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
            error={Boolean(errors.project_type)}
            helperText={errors.project_type}
            variant="outlined"
          >
            {projectTypes.map((pt) => (
              <MenuItem key={pt} value={pt}>
                {pt}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Box textAlign="right">
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
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
