import React, { useState } from 'react';
import { Paper, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Login from '../components/userAuthentication/login'
import SignUp from '../components/userAuthentication/signup'

function UserAuthentication() {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles(() => ({
        paper: {
            elevation: 20, width: 340, margin: "20px auto"
        },
    }));


    const classes = useStyles()

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
            <Paper className={classes.paper}>
                <Tabs
                    value={value}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Sign In" />

                    <Tab label="Sign Up" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Login handleChange={handleChange} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SignUp />
                </TabPanel>
            </Paper>
    )
}

export default UserAuthentication;