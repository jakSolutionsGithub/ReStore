import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
    message?: string;
}

export default function LoadingComponent({ message = "Loading..." }: Props) {
    return (
        <Backdrop open={true} invisible={false}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress size={55} thickness={6} color="secondary" />
                <Typography variant="h6" color="white" sx={{ justifyContent: "center", position: "fixed", top: "55%" }}>
                    {message}
                </Typography>
            </Box>
        </Backdrop>
    );
}
