import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useEffect} from "react";

export default function ActionAreaCard(props) {
    const item = props.props
    let currency
    let currency_name
    let currency_symbol

    useEffect(()=>{
        currency = Object.keys(item.currency);
        currency_name = (Object.values(item.currency)[0] as any).name;
        currency_symbol = (Object.values(item.currency)[0] as any).symbol;
    },[item])

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
                            {currency}:{currency_name}{currency_symbol}
                        </Typography>
                    </CardContent>:null
                }
            </CardActionArea>
        </Card>
    );
}
