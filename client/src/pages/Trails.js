import React, { useState, useEffect } from 'react';
import { Grid, Paper, TextField, Button, Typography, Container, Box, Menu, MenuItem, FormControlLabel, Checkbox, Chip, ButtonBase, List, ListItem, Slider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { green } from '@material-ui/core/colors';
import API from "../utils/API";
import { withRouter } from 'react-router-dom';




const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "20px auto"
    },
    paper: {
        padding: theme.spacing(2),
    },
    image: {
        width: 200, height: 200
    },
    img: {
        margin: 'auto', display: 'block', width: '100%', height: '100%'
    },
    lengthDiv: {
        width: 150
    }
}));

function Trails(props) {

    const { history } = props;

    const classes = useStyles();

    const [trails, setTrails] = useState([])

    useEffect(() => {
        loadTrails()
    }, [])

    function loadTrails() {
        API.getTrails()
            .then(res =>
                setTrails(res.data)
            )
            .catch(err => console.log(err))
    }

    const handleMenuClick = (pageURL) => {
        history.push(`/trails/${pageURL}`)
    };

    const [anchorDifficulty, setAnchorDifficulty] = useState(null);

    const handleDifficultyClick = (event) => {
        setAnchorDifficulty(event.currentTarget);
    };

    const handleDifficultyClose = () => {
        setAnchorDifficulty(null);
    };

    const [anchorLength, setAnchorLength] = useState(null);

    const handleLengthClick = (event) => {
        setAnchorLength(event.currentTarget);
    };

    const handleLengthClose = () => {
        setAnchorLength(null);
    };

    const [anchorElevation, setAnchorElevation] = React.useState(null);

    const handleElevationClick = (event) => {
        setAnchorElevation(event.currentTarget);
    };

    const handleElevationClose = () => {
        setAnchorElevation(null);
    };

    const [difficultyFilter, setDifficultyFilter] = React.useState({
        easy: true,
        moderate: true,
        hard: true,
    })

    const handleDifficultyChange = (event) => {
        setDifficultyFilter({
            ...difficultyFilter, [event.target.name]: event.target.checked
        }
        )
    }
    const { easy, moderate, hard } = difficultyFilter

    const [routeFilter, setRouteFilter] = React.useState({
        loop: true,
        out: true,
        point: true,
    })

    const handleRouteChange = (event) => {
        setRouteFilter({
            ...routeFilter, [event.target.name]: event.target.checked
        }
        )
    }
    const { loop, out, point } = routeFilter

    const [anchorRoute, setAnchorRoute] = useState(null);

    const handleRouteClick = (event) => {
        setAnchorRoute(event.currentTarget);
    };

    const handleRouteClose = () => {
        setAnchorRoute(null);
    };

    const [length, setLength] = useState([0, 150]);
    const lengthText = (length) => {
        return `${length}km`
    };
    const handleLenghthChange = (event, newValue) => {
        setLength(newValue);
    };



    return <div className={classes.root}>
        <Container maxWidth="lg" spacing={10}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Button
                        aria-controls="difficulty-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleDifficultyClick}
                        fullWidth>
                        Difficulty
                            <KeyboardArrowDownIcon />
                    </Button>
                    <StyledMenu
                        id="difficulty-menu"
                        anchorEl={anchorDifficulty}
                        keepMounted
                        open={Boolean(anchorDifficulty)}
                        onClose={handleDifficultyClose}
                    >
                        <MenuItem>
                            <FormControlLabel
                                control={<Checkbox checked={easy} onChange={handleDifficultyChange} name="easy" />}
                                label="Easy"
                            />
                        </MenuItem>
                        <MenuItem>
                            <FormControlLabel
                                control={<Checkbox checked={moderate} onChange={handleDifficultyChange} name="moderate" />}
                                label="Moderate"
                            />
                        </MenuItem>
                        <MenuItem>
                            <FormControlLabel
                                control={<Checkbox checked={hard} onChange={handleDifficultyChange} name="hard" />}
                                label="Hard"
                            />
                        </MenuItem>
                    </StyledMenu>

                </Grid>
                <Grid item xs={3}>
                    <Button
                        aria-controls="length-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleLengthClick}
                        fullWidth>
                        Length
                            <KeyboardArrowDownIcon />
                    </Button>
                    <StyledMenu
                        id="length-menu"
                        anchorEl={anchorLength}
                        keepMounted
                        open={Boolean(anchorLength)}
                        onClose={handleLengthClose}
                    >
                        <MenuItem>
                            <div className={classes.lengthDiv}>
                                <Slider
                                    value={length}
                                    onchange={handleLenghthChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getArialValueText={lengthText}
                                />
                            </div>

                        </MenuItem>
                    </StyledMenu>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        aria-controls="elevation-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleElevationClick}
                        fullWidth>
                        Elevation
                            <KeyboardArrowDownIcon />
                    </Button>
                    <StyledMenu
                        id="elevation-menu"
                        anchorEl={anchorElevation}
                        keepMounted
                        open={Boolean(anchorElevation)}
                        onClose={handleElevationClose}
                    >
                        <MenuItem>Elevation</MenuItem>
                    </StyledMenu>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        aria-controls="route-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleRouteClick}
                        fullWidth>
                        Route
                            <KeyboardArrowDownIcon />
                    </Button>
                    <StyledMenu
                        id="route-menu"
                        anchorEl={anchorRoute}
                        keepMounted
                        open={Boolean(anchorRoute)}
                        onClose={handleRouteClose}
                    >
                        <MenuItem>
                            <FormControlLabel
                                control={<Checkbox checked={loop} onChange={handleRouteChange} name="loop" />}
                                label="Loop"
                            />
                        </MenuItem>
                        <MenuItem>
                            <FormControlLabel
                                control={<Checkbox checked={out} onChange={handleRouteChange} name="out" />}
                                label="Out & back"
                            />
                        </MenuItem>
                        <MenuItem>
                            <FormControlLabel
                                control={<Checkbox checked={point} onChange={handleRouteChange} name="point" />}
                                label="Point to point"
                            />
                        </MenuItem>
                    </StyledMenu>
                </Grid>
            </Grid>
            {trails.length ? (
                <>
                    {trails.map(trail => (
                        <Grid key={trail._id} onClick={() => handleMenuClick(trail._id)} container spacing={5}>
                            <Grid item xs>
                                <Paper className={classes.paper}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} md={3} lg={3} className={classes.image}>
                                            <img className={classes.img} alt="image" src={trail.image} />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={9} lg={9} container>
                                            <Grid item container direction="column" align="left">
                                                <Grid item>
                                                    <Typography variant="subtitle1">
                                                        {trail.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {trail.location}
                                                    </Typography>
                                                </Grid>
                                                <Grid item spacing={1}>
                                                    <Chip label={trail.difficulty} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Length:{trail.length}km    Est.{trail.duration}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography gutterBottom align="left" variant="body1">
                                                        {trail.intro}                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Paper>
                            </Grid>
                        </Grid>
                    ))}
                </>
            ) : (
                    <Typography variant="h3">
                        No Results to Display
                    </Typography>
                )}
        </Container>
    </div>
}

export default withRouter(Trails);