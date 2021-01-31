import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Container, Box, Menu, MenuItem, FormControlLabel, Checkbox, Chip, ButtonBase } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { green } from '@material-ui/core/colors';

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
        margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%'
    }
}));

function Trails(props) {
    const classes = useStyles();

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

    const [anchorRoute, setAnchorRoute] = React.useState(null);

    const handleRouteClick = (event) => {
        setAnchorRoute(event.currentTarget);
    };

    const handleRouteClose = () => {
        setAnchorRoute(null);
    };

    const [stateFilter, setStateFilter] = React.useState({
        difficulty: {
            easy: true,
            moderate: true,
            hard: true,
        },
        route: {
            loop: true,
            out: true,
            point: true
        },
    })

    const handleDifficultyChange = (event) => {
        setStateFilter({
            ...stateFilter, difficulty: {
                ...stateFilter.difficulty, [event.target.name]: event.target.checked
            }
        })
    }
    const { easy, moderate, hard } = stateFilter.difficulty

    return <div className={classes.root}>
        <Container maxWidth="lg" spacing={3}>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Button
                        aria-controls="difficulty-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleDifficultyClick}>
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
                <Grid item xs>
                    <Button
                        aria-controls="length-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleLengthClick}>
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
                        <MenuItem>Length</MenuItem>
                    </StyledMenu>
                </Grid>
                <Grid item xs>
                    <Button
                        aria-controls="elevation-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleElevationClick}>
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
                <Grid item xs>
                    <Button
                        aria-controls="route-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleRouteClick}>
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
                        <MenuItem>Route</MenuItem>
                    </StyledMenu>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3} lg={3} className={classes.image}>
                                <img className={classes.img} alt="image" src="https://cdn-assets.alltrails.com/uploads/photo/image/22011982/extra_large_706ba1a5f39608dbe66b5df07ce4112f.jpg" />
                            </Grid>
                            <Grid item xs={12} md={9} lg={9} container>
                                <Grid item container direction="column" align="left">
                                    <Grid item>
                                        <Typography gutterBottom variant="subtitle1">
                                            Yarra Bend Park Loop
                                        </Typography>
                                        <Typography gutterBottom variant="body2" color="textSecondary">
                                            Yarra Bend Park
                                        </Typography>
                                    </Grid>
                                    <Grid item spacing={1}>
                                        <Chip label="Moderate" />
                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom variant="body2" color="textSecondary">
                                            Length:9.5 km   Est. 2 h 39 m
                                        </Typography>

                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom align="left" variant="body1">
                                            Yarra Bend Park Loop is a 9.5 kilometer heavily trafficked loop trail located near Melbourne, Victoria, Australia that features a river and is rated as moderate. The trail is primarily used for hiking, walking, running, and nature trips and is year-round.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default Trails;