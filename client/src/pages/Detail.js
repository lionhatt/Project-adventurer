import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Container, Box, Menu, MenuItem, FormControlLabel, Checkbox, Chip, ButtonBase } from '@material-ui/core';

const Detail = function() {

    return(
        <Grid container>
            <Grid item>
                image
            </Grid>
            <Grid item>
                name
                difficulty
                location name
            </Grid>
            <Grid item>
                address
            </Grid>
            <Grid item>
                intro
            </Grid>
            <Grid item>
                length
                Elevation
                route
            </Grid>
            <Gird item>
                description
            </Gird>
        </Grid>
    )

}

export default Detail;