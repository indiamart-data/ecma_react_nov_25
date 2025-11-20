import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Eager Loading
import LoaderAnimation from "../components/common/LoaderAnimation";
import ProductsComponent from "../components/products/ProductsComponent";

// Lazy Loading
const AboutComponent = lazy(() => import("../components/about/AboutComponent"));
const HomeComponent = lazy(() => import("../components/home/HomeComponent"));
const NoMatchComponent = lazy(() => import("../components/no-match/NoMatchComponent"));
const CounterRoot = lazy(() => import("../components/counter/CounterRoot"));
const ManageProductComponent  = lazy(() => import( "../components/products/ManageProductComponent"));

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/counter" element={<CounterRoot />} />
            <Route path="/products" element={<ProductsComponent />} />
            <Route path="/product/:id" element={<ManageProductComponent />} />
            <Route path="/product" element={<ManageProductComponent />} />
            <Route path="*" element={<NoMatchComponent />} />
        </Routes>
    </Suspense>
);