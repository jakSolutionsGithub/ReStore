import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function ServerError() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Container component={Paper}>
            {location.state === "error" ? (
                <>
                    <Typography variant="h3" color="error" gutterBottom>
                        {location.state} 3
                    </Typography>
                    <Divider />
                    <Typography>{location.state || "Internal server error"}</Typography>
                </>
            ) : (
                <Typography variant="h3" color="error" gutterBottom>
                    Server error
                </Typography>
            )}
            <Button onClick={() => navigate("/catalog")}>Go back to the store</Button>
        </Container>
    );
}
