import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Grid, Paper, TextField, Button, Typography, Container, Box, Menu, MenuItem, FormControlLabel, Checkbox, Chip, ButtonBase } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import { green, grey } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';
import { useUserContext } from "../utils/GlobalState";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "40px auto"
    },
    paper: {
        padding: theme.spacing(2),
    },
    image: {
        height: 360
    },
    img: {
        margin: 'auto', display: 'block', width: '100%', height: '100%'
    },
    title: {
        backgroundColor: grey[300],
        color: green[800]
    },
    header: {
        backgroundColor: green[700],
        color: grey[200]
    },
    button: {
        color: green[700]
    },
    advPaper: {
        elevation: 10, padding: theme.spacing(2), height: 30, backgroundColor: green[200],
    }

}));

function Detail(props) {

    const { history } = props;
    
    const [userState] = useUserContext();

    const handleMenuClick = (pageURL) => {
        if (userState.email !== null) {
            history.push(`/create/${pageURL}`)
        } else {
            history.push(`/user`)
        }
    };

    const [trail, setTrail] = useState({})

    const { id } = useParams()

    useEffect(() => {
        API.getTrail(id)
            .then(res => setTrail(res.data))
            .catch(err => console.log(err))
    }, [])


    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Container maxWidth="lg">
                <Paper className={classes.paper}>
                    <Grid container direction="column" spacing={5}>
                        <Grid item containers direction="column" spacing={1}>
                            <Grid item className={classes.image} >
                                <img className={classes.img} alt="image" src={trail.image} />
                            </Grid>
                            <Grid item className={classes.header}>
                                <Typography variant="h4" align="left">
                                    {trail.name}
                                </Typography>
                            </Grid>
                            <Grid item align="left">
                                {trail.location}
                            </Grid>
                            <Grid item align="left">
                                {trail.address}
                            </Grid>
                            <Grid item align="left">
                                <Chip label={trail.difficulty} />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2} align="left">
                            <Grid item container className={classes.title}>
                                <Typography variant="h5">
                                    Description
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    {trail.intro}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2} align="left">
                            <Grid item container className={classes.title}>
                                <Typography variant="h5">
                                    Stats
                                </Typography>
                            </Grid>
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
                        </Grid>
                        <Grid item container spacing={2} align="left">
                            <Grid item container className={classes.title}>
                                <Typography variant="h5">
                                    Update
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    {trail.discription}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2} align="left">
                            <Grid item container className={classes.title}>
                                <Typography variant="h5">
                                    Adventures
                                </Typography>
                            </Grid>
                            <Grid item container>
                                <Grid item container>
                                    <Button variant="outlined" className={classes.button} onClick={() => handleMenuClick(trail._id)}>
                                        <Grid container item>
                                            <Grid item>
                                                <Typography variant="h4">
                                                    Create Adventure
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <AddIcon style={{ fontSize: 40 }} />
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Grid>
    )

}

export default withRouter(Detail);