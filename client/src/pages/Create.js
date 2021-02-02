import React, { useState, useEffect } from 'react';
import { Grid, Paper, TextField, Button, Typography, Container, Box, Menu, MenuItem, FormControlLabel, Checkbox, Chip, ButtonBase } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import { Link, useParams, withRouter } from "react-router-dom";
import API from '../utils/API';


function Create(props) {

    const { history } = props;

    const useStyles = makeStyles((theme) => ({
        paper: {
            elevation: 10, padding: 20, height: 700, maxWidth: 768, margin: "20px auto"
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
            height: 360
        },
        img: {
            margin: 'auto', display: 'block', width: '100%', height: '100%'
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    }))

    const classes = useStyles()

    const [trail, setTrail] = useState({})

    const { id } = useParams()

    useEffect(() => {
        API.getTrail(id)
            .then(res => setTrail(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleMenuClick = () => {
        history.push("/")
    };



    return (
        <Grid>
            <Paper className={classes.paper}>
                <Grid container align='center'>
                <Grid item xs={12} align='center' className={classes.image}>
                <img className={classes.img} src={trail.image} alt='login.png'></img>
                </Grid>
                    <Grid item xs={12} align='center'>
                        <Typography variant="h4" gutterBottom>
                            {trail.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Typography variant="h6" gutterBottom>
                            Create Adventure
                    </Typography>
                    </ Grid>
                    <Grid item container>
                                <Grid item container xs direction="column">
                                    <Grid item>
                                        <Typography variant="body2">
                                            Length
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            {trail.length}km
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs direction="column">
                                    <Grid item>
                                        <Typography variant="body2">
                                            Elevation gain
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            {trail.elevation}m
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs direction="column">
                                    <Grid item>
                                        <Typography variant="body2">
                                            Route type
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            {trail.route}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                    <Grid item xs={12} align='center'>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="datetime-local"
                                label="Start Time"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                        </form>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="datetime-local"
                                label="Finish Time"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                        </form>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextField value={trail.address} required id="standard-required" label="Required" fullWidth />
                    </Grid>
                    <Grid item xs={12} align='center'>
                            <Button onClick={() => handleMenuClick()}
                            className={classes.button} type='submit' variant="contained" fullWidth>craete adventure</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default withRouter(Create);