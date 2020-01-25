import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: 250 ,
        textAlign : 'center',
        marginBottom: '30px',
        background: '#daffb5'
    },
    media: {
        width : "100%",
        height: 180,
    },
    content : {
        padding : 0,
    },
    actions : {
        padding: '0',
    },
    title : {
        marginBottom : 0,
        textTransform: 'capitalize',
    },
    btn : {
        margin : '0 auto',
    },
});

const Dish = ({name,img,remove,edit,price}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <img
                    alt="Dishes"
                    className={classes.media}
                    src={img}
                />
                <CardContent className={classes.content}>
                    <Typography className={classes.title} gutterBottom variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.title} gutterBottom variant="h6" component="p">
                        {price} <b>KGS</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button onClick={remove} className={classes.btn} size="small" color="primary">
                    Delete
                </Button>
                <Button onClick={edit} className={classes.btn} size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
};

export default Dish;
