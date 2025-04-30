import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Chip, CircularProgress } from '@mui/material';
import { green, orange, red } from '@mui/material/colors';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; // Import for charts

const COLORS = [green[500], orange[500], red[500]]; // For the pie chart sections

export default function ProjectSummaryCard({ isLoading, formStatus }) {
  if (isLoading) {
    return (
      <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 2, background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)' }}>
        <CardContent>
          <Typography variant="h6" color="text.primary">Loading project summary...</Typography>
          <CircularProgress sx={{ marginTop: 2 }} />
        </CardContent>
      </Card>
    );
  }

  const completedForms = Object.keys(formStatus).filter((key) => formStatus[key]).length;
  const totalForms = Object.keys(formStatus).length;
  const progress = (completedForms / totalForms) * 100;

  // Dynamic color for the progress
  let cardColor = green[500];
  if (progress < 50) cardColor = red[500];
  else if (progress < 75) cardColor = orange[500];

  // Pie chart data (completed, remaining, and in-progress forms)
  const chartData = [
    { name: 'Completed', value: completedForms },
    { name: 'Remaining', value: totalForms - completedForms }
  ];

  return (
    <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 2, background: `linear-gradient(135deg, ${cardColor}, #cfd8dc)`, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: 10 } }}>
      <CardContent>
        <Typography variant="h6" color="text.primary" fontWeight="bold">
          Project Summary
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body1" color="text.secondary">
            {completedForms} of {totalForms} forms completed.
          </Typography>

          {/* Pie chart for progress */}
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                outerRadius={50}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Chip label="Forms Completed" color="primary" variant="filled" sx={{ backgroundColor: green[500], color: 'white' }} />
          <Chip label={`${Math.round(progress)}%`} color={progress < 50 ? 'error' : 'success'} variant="outlined" />
        </Box>

        {/* Linear Progress Bar for better visualization */}
        <Box sx={{ marginTop: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 10,
              borderRadius: 1,
              backgroundColor: '#f0f0f0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: cardColor,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
