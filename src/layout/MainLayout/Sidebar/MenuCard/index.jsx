import PropTypes from 'prop-types';
import { memo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { linearProgressClasses } from '@mui/material/LinearProgress';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { Link as RouterLink } from 'react-router-dom';  // Import RouterLink

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
  return (
    <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
      <Grid>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Grid>
            
          </Grid>
          
        </Grid>
      </Grid>
      <Grid>
        <LinearProgress
          aria-label="progress of theme"
          variant="determinate"
          value={value}
          {...others}
          sx={{
            height: 10,
            borderRadius: 30,
            [`&.${linearProgressClasses.colorPrimary}`]: {
              bgcolor: 'background.paper'
            },
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
              bgcolor: 'primary.dark'
            }
          }}
        />
      </Grid>
    </Grid>
  );
}

// ==============================|| SIDEBAR - MENU CARD ||============================== //

function MenuCard() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        bgcolor: 'primary.light',
        mb: 2.75,
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          width: 157,
          height: 157,
          bgcolor: 'primary.200',
          borderRadius: '50%',
          top: -105,
          right: -96
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <List disablePadding sx={{ pb: 1 }}>
          {/* Existing Card Item */}
          <ListItem alignItems="flex-start" disableGutters disablePadding>
            
            
          </ListItem>

          {/* New menu item for Project Forms */}
          <ListItem component={RouterLink} to="/projectforms" button>

            <ListItemAvatar sx={{ mt: 0 }}>
              <Avatar
                variant="rounded"
                sx={{
                  ...theme.typography.commonAvatar,
                  ...theme.typography.largeAvatar,
                  color: 'primary.main',
                  border: 'none',
                  borderColor: 'primary.main',
                  bgcolor: 'background.paper'
                }}
              >
                <TableChartOutlinedIcon fontSize="inherit" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ mt: 0 }}
              primary={
                <Typography variant="subtitle1" sx={{ color: 'primary.800' }}>
                  Project Forms
                </Typography>
              }
              secondary={<Typography variant="caption">VDA Project Forms</Typography>}
            />
          </ListItem>
        </List>
        <LinearProgressWithLabel value={80} />
      </Box>
    </Card>
  );
}

export default memo(MenuCard);

LinearProgressWithLabel.propTypes = { value: PropTypes.number, others: PropTypes.any };
