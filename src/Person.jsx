import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Searchbar from './Searchbar';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    root1: {
        minWidth: 190,
        height: "8vh",
        marginTop: 30,
        backgroundColor: '#3498db',
    },
    root: {
        minWidth: 190,
        height: "8vh",
        marginTop: 10,
        backgroundColor: 'white',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        backgroundColor: '#3498db'
    },
    pos: {
        marginBottom: 12,
    },
});

function Person({children}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
       
        <div>
             {children}
            <p>Patients</p>
            <Searchbar />
            <Card className={classes.root1} variant="outlined">
                <img style={{ borderRadius: 120, width: 8, height: 8, marginLeft: 210, marginTop: 30, backgroundColor: '#00FF00', color: 'white' }}>

                </img>
                <CardContent>
                    <Typography style={{ fontSize: 15, color: 'white', marginTop: -70 }}



                    >
                        <img style={{ borderRadius: 100, width: 40, height: 40, marginTop: 20 }} src="https://images.pexels.com/photos/3990301/pexels-photo-3990301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />
                        <p style={{ fontWeight: 'bolder', fontSize: 12, color: 'white', marginTop: -45, marginLeft: 50 }}>  Sara smith </p>

                    </Typography>
                    <Typography style={{ fontSize: 12, color: 'white', marginTop: -10, marginLeft: 50 }} >
                        15 Aug 2020

          </Typography>



                </CardContent>

            </Card>


            <Card className={classes.root} variant="outlined">
                <img style={{ borderRadius: 120, width: 8, height: 8, marginLeft: 210, marginTop: 30, backgroundColor: '#B22222', color: 'white' }}>

                </img>
                <CardContent>
                    <Typography style={{ fontSize: 15, color: 'white', marginTop: -70 }}



                    >
                        <img style={{ borderRadius: 100, width: 40, height: 40, marginTop: 20 }} src="https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />
                        <p style={{fontWeight: 'bolder', fontSize: 12, color: 'black', marginTop: -45, marginLeft: 50 }}>  James Johnson </p>

                    </Typography>
                    <Typography style={{ fontSize: 12, color: 'black', marginTop: -10, marginLeft: 50 }} >
                        No Clearance

          </Typography>



                </CardContent>

            </Card>


            <Card className={classes.root} variant="outlined">
                <img style={{ borderRadius: 120, width: 8, height: 8, marginLeft: 210, marginTop: 30, backgroundColor: '#00FF00', color: 'white' }}>

                </img>
                <CardContent>
                    <Typography style={{ fontSize: 15, color: 'white', marginTop: -70 }}



                    >
                        <img style={{ borderRadius: 100, width: 40, height: 40, marginTop: 20 }} src="https://images.pexels.com/photos/878846/pexels-photo-878846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />
                        <p style={{ fontWeight: 'bolder', fontSize: 12, color: 'black', marginTop: -45, marginLeft: 50 }}>  Patrick Page </p>

                    </Typography>
                    <Typography style={{ fontSize: 12, color: 'black', marginTop: -10, marginLeft: 50 }} >
                        19 Aug 2020

          </Typography>



                </CardContent>

            </Card>


            <Card className={classes.root} variant="outlined">
                <img style={{ borderRadius: 120, width: 8, height: 8, marginLeft: 210, marginTop: 30, backgroundColor: '#00FF00', color: 'black' }}>

                </img>
                <CardContent>
                    <Typography style={{ fontSize: 15, color: 'black', marginTop: -70 }}



                    >
                        <img style={{ borderRadius: 100, width: 40, height: 40, marginTop: 20 }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />
                        <p style={{ fontSize: 12, color: 'black', marginTop: -45, marginLeft: 50 }}>  Derek Diemon </p>

                    </Typography>
                    <Typography style={{ fontSize: 12, color: 'black', marginTop: -10, marginLeft: 50 }} >
                        21 Aug 2020

          </Typography>



                </CardContent>

            </Card>

        <Divider/>

        </div>
    );
}
export default Person;