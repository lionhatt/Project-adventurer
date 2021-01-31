import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import loginImg from '../../images/login.png';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useUserContext } from "../../utils/GlobalState";
import { SET_USER_LOGIN } from "../../utils/actions"


function Login() {

    const [state, dispatch] = useUserContext();

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let response = await API.getUser(formObject.username);
            if (response.data.password !== formObject.password) {
                return;
            }
            dispatch({ type: SET_USER_LOGIN, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }




    const useStyles = makeStyles((theme) => ({
        paper: {
            elevation: 10, padding: 20, height: 520, width: 300, margin: "20px auto"
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
                            Sign In
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align='center' className={classes.image}>
                        <img className={classes.img} src={loginImg} alt='login.png'></img>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField id="username" name="username" onChange={handleInputChange} label='Username' placeholder='Enter username' fullWidth required />

                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField id="password" name="password" onChange={handleInputChange} label='Password' placeholder='Enter password' type='password' fullWidth required />

                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Link>
                            <Button onClick={handleLogin} className={classes.button} type='submit' variant="contained" fullWidth>Sign In</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

    )
}

export default Login;