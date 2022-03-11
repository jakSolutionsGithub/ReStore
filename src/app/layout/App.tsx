import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import Catalog from "../../features/catalog/Catalog";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";

function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<ProductDetails />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
