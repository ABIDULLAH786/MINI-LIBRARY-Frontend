import React from 'react';
import { useState, useEffect } from 'react';

import { useParams } from "react-router";
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import BookData from "../book_data";
import { Box } from '@mui/system';
const Detail = () => {
    const { id } = useParams();
    const product = BookData.filter((item) => item.isbn == id);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/bookById/${id}`);
            const collectedData = await response.json();
            setData(collectedData.bookDetail[0]);

            // console.log("Here", collectedData)
        }
        fetchData();
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 0.01,
                duration: 0.5,
                stype: "spring",
                stiffness: 120,
            }}
            className="col-md-6 col-sm-12 offset-md-3 mt-5"

        >
            <Box sx={{
                bgcolor: 'primary.main',
                display: 'flex', justifyContent: 'center'
            }}>
                <Box sx={{ }}>
                    <CardContent >
                        <Typography variant="h5" component="div">
                            {console.log(data)}
                            {data.book_title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <span>{data.book_author}</span>

                        </Typography>
                        <Typography variant="body1">
                            <span>Book Availability :  {(!data.available) ? "Availabile" : "Borrowed"}</span>

                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small" >More Info</Button>
                    </CardActions> */}
                </Box>
            </Box>
        </motion.div>
    );
}
export default Detail;