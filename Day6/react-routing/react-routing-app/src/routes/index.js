import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// Eager Loading
// import AboutComponent from "../components/about/AboutComponent";
// import AdminComponent from "../components/admin/AdminComponent";
// import AssignComponent from "../components/assign/AssignComponent";
// import HomeComponent from "../components/home/HomeComponent";
// import LoginComponent from "../components/login/LoginComponent";
// import NoMatchComponent from "../components/no-match/NoMatchComponent";
// import ProductsComponent from "../components/products/ProductsComponent";
import LoaderAnimation from "../components/common/LoaderAnimation";
import ProductsAPIProvider from "../contexts/ProductsAPIProvider";
import ProductsProvider from "../contexts/ProductsContext";
import authenticatorClient from "../services/authenticator-api-client";

// Lazy Loading
const AboutComponent = lazy(() => import("../components/about/AboutComponent"));
const AdminComponent = lazy(() => import("../components/admin/AdminComponent"));
const AssignComponent = lazy(() => import("../components/assign/AssignComponent"));
const HomeComponent = lazy(() => import("../components/home/HomeComponent"));
const LoginComponent = lazy(() => import("../components/login/LoginComponent"));
const NoMatchComponent = lazy(() => import("../components/no-match/NoMatchComponent"));
const ProductsComponent = lazy(() => import("../components/products/ProductsComponent"));
const ProductNotSelectedComponent = lazy(() => import("../components/products/ProductNotSelectedComponent"));
const ProductDetailsComponent = lazy(() => import("../components/products/ProductDetailsComponent"));

// Route Guard
const SecuredRoute = ({ children }) => {
    let location = useLocation();

    if (authenticatorClient.isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} />
    }
}

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/products" element={
                <ProductsProvider>
                    <ProductsComponent />
                </ProductsProvider>
            }>
                <Route path="" element={<ProductNotSelectedComponent />} />
                <Route path=":productId" element={<ProductDetailsComponent />} />
            </Route>
            <Route path="/admin" element={
                <SecuredRoute>
                    <ProductsAPIProvider>
                        <AdminComponent />
                    </ProductsAPIProvider>
                </SecuredRoute>
            } />
            <Route path="/assign" element={<AssignComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="*" element={<NoMatchComponent />} />
        </Routes>
    </Suspense>
);