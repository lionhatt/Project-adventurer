import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: green[800],
    },
    button: {
        color: green[800],
        marginRight: theme.spacing(2),
    },
    appBar: {
        top: 'auto',
        backgroundColor: green[100],
        bottom: 0,
    },
}));

function Footer() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography className={classes.title}>
                        @2020-Adventurer-Gavin Deng
                         </Typography>


                    <div>
                        <a className={classes.button} href="https://www.linkedin.com/in/gavin-deng-26101993/" target="_blank">
                            <LinkedInIcon />
                        </a>
                        <a className={classes.button} href="https://github.com/lionhatt" target="_blank">
                            <GitHubIcon />
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Footer);