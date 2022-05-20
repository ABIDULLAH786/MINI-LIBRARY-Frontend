import { Box, CardContent, Typography } from "@mui/material";

const Home = ()=>{
    return(
        <>
            <Box sx={{
                
                display: 'flex', justifyContent: 'center'
            }}>
                    <CardContent >
                        <Typography sx={{ml:4, mb: 1.5 }} variant="h4" color="">
                           WEL-COME TO MINILIBRARY
                        </Typography>

                    </CardContent>
                  
            </Box>
        </>
    )
}
export default  Home;