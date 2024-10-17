import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Home from '../Components/Home';  // Your class component

const HomeWithRouter = () => {
    const navigate = useNavigate();  // To programmatically navigate
    const params = useParams();      // To get route params if any
    const location = useLocation();  // To get current route information

    return <Home navigate={navigate} params={params} location={location} />;
};

export default HomeWithRouter;