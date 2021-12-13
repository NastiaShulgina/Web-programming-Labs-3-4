import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import foods from '../static/foods';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '117vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}));


export default function () {
    const classes = useStyles();

    const [visible, setVisible] = useState(3);

    const loadMore = () => {
        setVisible(visible + 3)
    }

    const renderingCard = (food) =>{
        return(
            <div>
                <ImageCard extended={ true } food={food}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {foods.slice(0, visible).map(food => renderingCard(food))}
            {visible < foods.length && (
                <button className="buttonSecondPage" onClick={ loadMore }>View more</button>
            )}
        </div>
    );
}
