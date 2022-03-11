import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardHeader
                title={product.name}
                titleTypographyProps={{
                    sx: {
                        fontWeight: "bold",
                        color: "primary.main",
                        fontSize: 16,
                    },
                }}
            ></CardHeader>
            <CardMedia
                component="img"
                height="140"
                sx={{ backgroundSize: "contain" }}
                image={product.pictureUrl}
                title={product.name}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5">
                    {(product.price / 100).toFixed(2)} €
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to card</Button>
                <Button
                    component={Link}
                    to={`/catalog/${product.id}`}
                    size="small"
                >
                    View
                </Button>
            </CardActions>
        </Card>
    );
}
