import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import Catalog from "../../features/catalog/Catalog";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import { useStoreContext } from "../context/StoreContext";
import { useEffect, useState } from "react";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import Checkoutpage from "../../features/checkout/CheckoutPage";

function App() {
    const { setBasket } = useStoreContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const buyerId = getCookie("buyerId");
        if (buyerId) {
            agent.Basket.get()
                .then((basket) => setBasket(basket))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [setBasket]);

    if (loading) return <LoadingComponent message="Initializing app.." />;

    return (
        <>
            <ToastContainer position="bottom-right" />
            <CssBaseline />
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog/*" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<ProductDetails />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/server-error" element={<ServerError />} />
                    <Route path="/basket" element={<BasketPage />} />
                    <Route path="/checkout" element={<Checkoutpage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
