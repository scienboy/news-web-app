import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NotFound() {
    return <Box>
        <Typography
            variant='h3'
            sx={{
                textAlign: "center",
            }}
        >
            Sorry, page not found!
        </Typography>
    </Box>

}