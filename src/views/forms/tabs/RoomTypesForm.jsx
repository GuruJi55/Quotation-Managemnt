import { useState } from 'react';
import {
  Grid, TextField, Button, IconButton, MenuItem, Typography, Box, Paper
} from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

const roomTypeOptions = ['Standard Room', 'King Room', 'Suite Room'];

export default function RoomTypesForm({ projectId, onNext }) {
  const [roomTypes, setRoomTypes] = useState([{ room_type: '', count: '' }]);
  const [errors, setErrors] = useState({});

  const handleChange = (index, e) => {
    const newList = [...roomTypes];
    newList[index][e.target.name] = e.target.value;
    setRoomTypes(newList);

    // Clear specific error if user updates a field
    setErrors({ ...errors, [`${e.target.name}_${index}`]: '' });
  };

  const handleAdd = () => {
    setRoomTypes([...roomTypes, { room_type: '', count: '' }]);
  };

  const handleRemove = (index) => {
    const newList = [...roomTypes];
    newList.splice(index, 1);
    setRoomTypes(newList);
  };

  const validateForm = () => {
    let isValid = true;
    const formErrors = {};

    roomTypes.forEach((room, index) => {
      if (!room.room_type) {
        formErrors[`room_type_${index}`] = 'Room type is required';
        isValid = false;
      }
      if (!room.count || isNaN(room.count) || parseInt(room.count) <= 0) {
        formErrors[`count_${index}`] = 'Valid count is required';
        isValid = false;
      }
    });

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    alert('Room types saved!');
    if (onNext) onNext();
  };

  return (
    <Paper elevation={2} sx={{ p: 4, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h5" mb={3}>Room Types</Typography>

      {roomTypes.map((room, index) => (
        <Grid container spacing={3} key={index} alignItems="center" mb={1}>
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Room Type"
              name="room_type"
              fullWidth
              value={room.room_type}
              onChange={(e) => handleChange(index, e)}
              variant="outlined"
              error={Boolean(errors[`room_type_${index}`])}
              helperText={errors[`room_type_${index}`]}
            >
              {roomTypeOptions.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Count"
              name="count"
              type="number"
              fullWidth
              value={room.count}
              onChange={(e) => handleChange(index, e)}
              variant="outlined"
              error={Boolean(errors[`count_${index}`])}
              helperText={errors[`count_${index}`]}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box display="flex" gap={1}>
              <IconButton color="primary" onClick={handleAdd}>
                <AddCircle fontSize="large" />
              </IconButton>
              {index > 0 && (
                <IconButton color="error" onClick={() => handleRemove(index)}>
                  <RemoveCircle fontSize="large" />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
      ))}

      <Box mt={3} textAlign="right">
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{ px: 4, py: 1.5 }}
        >
          Save & Next
        </Button>
      </Box>
    </Paper>
  );
}
