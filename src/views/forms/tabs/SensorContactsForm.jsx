import { useState } from 'react';
import {
  Grid, TextField, MenuItem, IconButton, Button, Typography, Box, Paper, Divider
} from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import axios from 'axios';

const roomTypes = ['Standard Room', 'King Room', 'Suite Room'];
const zones = ['Living', 'Kitchen', 'Balcony'];
const types = ['Sensor', 'Contact'];
const mounts = ['Wall', 'Door', 'Window'];

export default function SensorContactsForm({ projectId, onNext }) {
  const [entries, setEntries] = useState([
    { room_type: '', zone: '', type: '', mount: '', count: '', function_type: '' }
  ]);

  const handleChange = (index, e) => {
    const updated = [...entries];
    updated[index][e.target.name] = e.target.value;
    setEntries(updated);
  };

  const handleAdd = () => {
    setEntries([...entries, { room_type: '', zone: '', type: '', mount: '', count: '', function_type: '' }]);
  };

  const handleRemove = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
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
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>Sensor & Contacts Integration</Typography>

      {/* Form Entries */}
      {entries.map((entry, index) => (
        <Paper key={index} elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                select
                fullWidth
                label="Room Type"
                name="room_type"
                value={entry.room_type}
                onChange={(e) => handleChange(index, e)}
                variant="outlined"
              >
                {roomTypes.map(rt => <MenuItem key={rt} value={rt}>{rt}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                select
                fullWidth
                label="Zone"
                name="zone"
                value={entry.zone}
                onChange={(e) => handleChange(index, e)}
                variant="outlined"
              >
                {zones.map(z => <MenuItem key={z} value={z}>{z}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                select
                fullWidth
                label="Type"
                name="type"
                value={entry.type}
                onChange={(e) => handleChange(index, e)}
                variant="outlined"
              >
                {types.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                select
                fullWidth
                label="Mount"
                name="mount"
                value={entry.mount}
                onChange={(e) => handleChange(index, e)}
                variant="outlined"
              >
                {mounts.map(m => <MenuItem key={m} value={m}>{m}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                fullWidth
                type="number"
                label="Count"
                name="count"
                value={entry.count}
                onChange={(e) => handleChange(index, e)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                fullWidth
                label="Function Type"
                name="function_type"
                value={entry.function_type}
                onChange={(e) => handleChange(index, e)}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={1}>
              <Box display="flex" justifyContent="flex-start" sx={{ gap: 2 }}>
                <IconButton color="primary" onClick={handleAdd}>
                  <AddCircleOutline fontSize="large" />
                </IconButton>
                {index > 0 && (
                  <IconButton color="error" onClick={() => handleRemove(index)}>
                    <RemoveCircleOutline fontSize="large" />
                  </IconButton>
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Divider sx={{ my: 3 }} />

      {/* Submit Button */}
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          size="large"
          sx={{ px: 4, py: 1.5 }}
          onClick={handleSubmit}
        >
          Save & Next
        </Button>
      </Box>
    </Paper>
  );
}
