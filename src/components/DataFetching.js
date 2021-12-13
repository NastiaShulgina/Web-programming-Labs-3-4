import React, { useState } from 'react'
import ImageCard from './ImageCard';
import foodsCatalog from '../static/foodsCatalog';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

function DataFetching({foods}) {

    const [data] = useState(foodsCatalog);
    const classes = useStyles();

    return (
        <div>
            <ul>
                {
                    <div className={classes.root}>
                        {foods.map(food => (<ImageCard extended={false} food={ food }/>))}
                        {data.length === 0 && <span>No records found to display!</span>}
                    </div>
                }
            </ul>
        </div>
    )
}



export default DataFetching
