import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from '../pages/login';
import Flight from '../pages/flight';

const RoutesPage = () => (
    <BrowserRouter>
        <Routes >
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/flights" element={<Flight />} />
        </Routes>
    </BrowserRouter>
)
export default RoutesPage;