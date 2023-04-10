import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
    const item = props.props
    console.log(item)
    return (
        <Card sx={{ maxWidth: 345,height: 430}} style={{marginTop:"1rem"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={item?.flag}
                />
                {item?
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {item.common_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.official_name}({item.short_name})
                            <p>region:{item.region}</p>
                            <p>timezone:{item.timezone}</p>
                            <p>capital:{item.capital}</p>
                            {Object.keys(item.currency)}:{Object.values(item.currency)[0].name}{Object.values(item.currency)[0].symbol}
                        </Typography>
                    </CardContent>:null
                }
            </CardActionArea>
        </Card>
    );
}
