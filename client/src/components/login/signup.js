import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SignupImg from '../../images/signup.png'

function SignUp() {

    const useStyles = makeStyles((theme) => ({
        paper: {
            levation: 10, padding: 20, height: 520, width: 300, margin: "20px auto"
        },
        button: {
            margin: '20px 0',
            color: theme.palette.getContrastText(green[500]),
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[700],
            },
        },
        image: {
            width: 250, height: 250
        },
        img: {
            margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%'
        }
    }))

    const classes = useStyles()

    return (
        <Grid>
            <Paper className={classes.paper}>
                <Grid container align='center'>
                    <Grid item xs={12} align='center'>
                        <Typography variant="h4" gutterBottom>
                            Sign Up
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align='center' className={classes.image}>
                        <img className={classes.img} src={SignupImg} alt='signup.png'></img>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField label='Username' placeholder='Enter username' fullWidth required />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField label='email' placeholder='xxx@xxx.com' fullWidth required />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />

                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Button className={classes.button} type='submit' variant="contained" fullWidth>Sign Up</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SignUp;