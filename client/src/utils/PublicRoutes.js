import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoutes = ({ ...rest }) => {
	const { auth } = useSelector((state) => ({ ...state }));

	return !auth.currentUser ? <Route {...rest} /> : <Navigate to='/' />;
};

export default PublicRoutes;
