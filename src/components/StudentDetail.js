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
const StudentDetail = () => {
    const { id } = useParams();
    const product = BookData.filter((item) => item.isbn == id);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/studentById/${id}`);
            const collectedData = await response.json();
            setData(collectedData.studentDetail[0]);
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
                <Box sx={{}}>
                    <CardContent >
                        <Typography sx={{ml:4, mb: 1.5 }} color="text.secondary">
                            Student
                        </Typography>

                        <Typography variant="h5" component="div">
                            {data.fname} {data.lname}
                        </Typography>
                    </CardContent>
                  
                </Box>
            </Box>
        </motion.div>
    );
}
export default StudentDetail;