import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
    const item = props.props
    return (
        <Card sx={{ maxWidth: 345,height: 430}} style={{marginTop:"1rem"}}>
            <CardActionArea data-testid="card-action-area">
                <CardMedia
                    component="img"
                    height="180"
                    image={item?.flag}
                    data-testid="card-media"
                />
                {item?
                    <CardContent data-testid="card-content">
                        <Typography gutterBottom variant="h6" component="div">
                            {item.common_name}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                           {item.official_name}({item.short_name})
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            region:{item.region}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            timezone:{item.timezone}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            capital:{item.capital}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            {Object.keys(item.currency)}:{(Object.values(item.currency)[0] as any).name} {(Object.values(item.currency)[0] as any).symbol}
                        </Typography>
                    </CardContent>:null
                }
            </CardActionArea>
        </Card>
    );
}
