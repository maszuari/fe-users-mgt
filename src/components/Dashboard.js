import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography'

import TabPanel from './Tab/TabPanel'
import Main from './Main/Main';
import User from './User/User';

export default function Dashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box>
           <Typography component={'span'}>Dashboard</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="dashboard-tabs">
                    <Tab label="Main" {...a11yProps(0)} />
                    <Tab label="User" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Main />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <User />
            </TabPanel>
        </Box>
    )
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }