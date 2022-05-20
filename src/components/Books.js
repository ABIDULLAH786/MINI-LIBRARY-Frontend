import React, { Suspense } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import book_data from "../book_data";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
const dataList = book_data;

const CustomCard = (props) => {
    const navigate = useNavigate();
    const { params, setParams } = useParams();


    return (
        <React.Fragment>
            
            <CardContent sx={{ bgcolor: 'text.secondary' }}>
                <Typography variant="h5" component="div">
                    {props.data.book_title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.data.book_author}
                </Typography>
                <Typography variant="body2">
                    {(!props.data.available) ? "Available" : "Borrowed"}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/book/${props.data.id}`}>
                    <Button size="small" >More Info</Button>
                </Link>
            </CardActions>
        </React.Fragment>

    )
    function handleClick() {
        navigate("/book/detail");
    }

}

export default function Books() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8000/books");
            const collectedData = await response.json();
            setData(collectedData.books);

        }
        fetchData();
    }, []
    )
    return (
        <div className='row'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.length!==0  && data.map((item, index) => (
                    <Grid item xs={2} sm={4} md={3} key={index}>
                        <Card variant="outlined" >
                            < Suspense fallback={<div className="display-1"> Data is loading</div>}>
                                <CustomCard data={item} />
                            </Suspense>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </div>
    );
}