import React from 'react';
import './cards.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardMedia from '@material-ui/core/CardMedia';
import tile1 from '../../assets/tile1.png'
import tile2 from '../../assets/tile2.png'
import tile3 from '../../assets/tile3.png'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '5px',
    marginRight: '5px',
  },
  media: {
    margin: '10px',
  },
  title: {
    display: 'inline-block',
    fontSize: 14,
  },
  pos: {
    display: 'inline-block',
    marginBottom: 12,
  },
});

const displayCards = (image) => {

if(image === 'tile1'){
    return (<img src={tile1} ></img>)
}
else if(image === 'tile2'){
    return (<img src={tile2} ></img>)
}
else{
    return (<img src={tile3} ></img>)
}
}

export default function SimpleCard(props) {
  const classes = useStyles();
  const pngs = displayCards(props.routesConfig.image);
  console.log(pngs)
  return (
    <Card className={classes.card}>
         <ButtonBase
          onClick={props.cardClickEvent}>
        <CardContent>
        <Grid
      justify="space-between" // Add it here :)
      container 
      spacing={24}
    >
      <Grid item>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.routesConfig.label}
        </Typography>
        </Grid>
        <Grid item>
        <Typography className={classes.pos} color="textSecondary">
          {props.routesConfig.priceTime}
        </Typography>
        </Grid>
        </Grid>
        <CardMedia className={classes.media}>
            {pngs}
        </CardMedia>
      </CardContent>
      </ButtonBase>
    </Card>
  );
}
