import React, { useState, useEffect} from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SignupImg from '../../images/signup.png'
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useUserContext } from "../../utils/GlobalState";
import { SET_USER_LOGIN } from "../../utils/actions"

function SignUp() {

    const [state, dispatch] = useUserContext();

    const [formObject, setFormObject] = useState({
        username: "",
        email: "",
        password: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };


    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            let checkUserExist = await API.getUser(formObject.username);
            if(checkUserExist.data === null) {
                let response = await API.saveUser({
                    username: formObject.username,
                    email: formObject.email,
                    password: formObject.password
                })
                dispatch({ type: SET_USER_LOGIN, payload: response.data })
            } 
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
                            Sign Up
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align='center' className={classes.image}>
                        <img className={classes.img} src={SignupImg} alt='signup.png'></img>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField name="username" value={formObject.username} onChange={handleInputChange} label='Username' placeholder='Enter username' fullWidth required />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField name="email" value={formObject.email} onChange={handleInputChange} label='email' placeholder='xxx@xxx.com' fullWidth required />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField name="password" value={formObject.password} onChange={handleInputChange} label='Password' placeholder='Enter password' type='password' fullWidth required />

                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Link>
                            <Button onClick={handleSignUp} className={classes.button} type='submit' variant="contained" fullWidth>Sign Up</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SignUp;