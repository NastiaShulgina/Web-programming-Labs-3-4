import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SecondPage from './SecondPage';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${'https://scontent.flwo3-1.fna.fbcdn.net/v/t39.30808-6/259457219_5351311361550036_6428190075378303139_n.png?_nc_cat=1&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbIvu-TsckwAX_1jbgw&_nc_ht=scontent.flwo3-1.fna&oh=0e63673a74d7790ddc1fda4f1ddad881&oe=61A37D11'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-50px',
        width: '90%',
        margin: '0 auto',
    },
    title: {
        fontSize: '50px',
        color: 'black',
    },
    sizeParagraph: {
        fontSize: '24px',
        color: 'black',
    },
}));

export default function Intro() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.main}>
                <div>
                    <h1 className={classes.title}>Food</h1>
                    <p className={classes.sizeParagraph}> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of. <br/>
                    type and scrambled it to make a type specimen book.  <br/>

                    <h1>Lorem!</h1> 
                    </p>
                </div>
            </div>
            <SecondPage />
        </div>
        
    );
}
