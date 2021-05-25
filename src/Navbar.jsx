import React, { useState } from 'react';
import { Button, AppBar, Avatar, Toolbar, Typography, Drawer, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 300,
    },
    appBar: {
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
    },

    title: {
        marginRight: "auto",
    },
    drawer: {
        width: 300,
    },
    content: {
        padding: theme.spacing(3),
        marginTop: 10,
        marginLeft: -30,
        marginBottom: 30,
        backgroundColor: "#F5F5F5",
        height: 328,
    },
    color: {
        backgroundColor: "#32CD32",
    },
    divider: {
        height: 12,
        width: "100vw",
    },
    row: {
        display: "flex",
        fontSize: 12,
    },

    font: {
        fontSize: 10,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: 10,
    },
    marginTable: {
        margin: 0,
    },
    tableTwo: {
        width: 50,
    },

  
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div className={classes.root}>


            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    
                    <img
                        src="https://th.bing.com/th/id/OIP.O_fZf8_JCOu14l6A4YdBhQHaHC?w=201&h=186&c=7&o=5&dpr=1.25&pid=1.7"
                        style={{ width: 50, height: 50, marginRight: 80 }}
                    />
                    <Typography variant="h5" style={{ flexGrow: 1 }}>
                        <Button style={{ backgroundColor: '#1E90FF', color: 'white' }} >Patients</Button>
                        <Button >Calender</Button>
                        <Button >Users</Button>
                        <Button >Billing</Button>
                    </Typography>
                    <div className='icon' >
                    <Avatar 
                        src="data:image/jpeg;base64,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"
                        style={{ marginRight: 30 }}
                    />
                        </div>
                        <div>
                    <Avatar  src="https://th.bing.com/th/id/OIP.bgdX5HsTMs3n5NFfNcHUWwHaGZ?w=239&h=207&c=7&o=5&dpr=1.25&pid=1.7" />
                    </div>
                </Toolbar>
                <Divider className={classes.divider} />
            </AppBar>
        </div>
    );
};

export default Navbar;