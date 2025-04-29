import { useState } from 'react';
import {
  Grid, TextField, Button, MenuItem, IconButton, Typography, Box
} from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import axios from 'axios';

const roomTypes = ['Standard Room', 'King Room', 'Suite Room'];
const zones = ['Bathroom', 'Balcony', 'Living Room', 'Kitchen'];
const controlTypes = ['On/Off', 'Dimming DALI', 'Dimming CV', 'Dimming CC'];

export default function LoadSelectionForm({ projectId, onNext }) {
  const [entries, setEntries] = useState([
    { room_type: '', zone: '', control_type: '', circuit_name: '' }
  ]);
  const [file, setFile] = useState(null);

  const handleChange = (index, e) => {
    const updated = [...entries];
    updated[index][e.target.name] = e.target.value;
    setEntries(updated);
  };

  const handleAdd = () => {
    setEntries([...entries, { room_type: '', zone: '', control_type: '', circuit_name: '' }]);
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
    <Box>
      <Typography variant="h6" gutterBottom>Load Selection</Typography>

      <Box mb={2}>
        <Button variant="outlined" component="label">
          Upload Load Circuit Image
          <input type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
        </Button>
        {file && <Typography variant="body2" mt={1}>Selected: {file.name}</Typography>}
      </Box>

      {entries.map((entry, index) => (
        <Grid container spacing={2} alignItems="center" key={index}>
          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              label="Room Type"
              name="room_type"
              value={entry.room_type}
              onChange={(e) => handleChange(index, e)}
            >
              {roomTypes.map((room) => (
                <MenuItem key={room} value={room}>{room}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              label="Zone"
              name="zone"
              value={entry.zone}
              onChange={(e) => handleChange(index, e)}
            >
              {zones.map((z) => (
                <MenuItem key={z} value={z}>{z}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              label="Control Type"
              name="control_type"
              value={entry.control_type}
              onChange={(e) => handleChange(index, e)}
            >
              {controlTypes.map((ct) => (
                <MenuItem key={ct} value={ct}>{ct}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              label="Circuit Name"
              name="circuit_name"
              value={entry.circuit_name}
              onChange={(e) => handleChange(index, e)}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton color="primary" onClick={handleAdd}>
              <AddCircle />
            </IconButton>
            {index > 0 && (
              <IconButton color="error" onClick={() => handleRemove(index)}>
                <RemoveCircle />
              </IconButton>
            )}
          </Grid>
        </Grid>
      ))}

      <Box mt={2} textAlign="right">
        <Button variant="contained" onClick={handleSubmit}>
          Save & Next
        </Button>
      </Box>
    </Box>
  );
}
