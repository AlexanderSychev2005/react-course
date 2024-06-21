import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader/>
    }

    return (
            isAuth
            ?
            <Routes>
                {privateRoutes.map(route => (
                    <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    ))}
                <Route path="*" element={<Navigate to="posts" replace/>} key="*"/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => (
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    ))}
                <Route path="*" element={<Navigate to="login" replace/>} key="*"/>
            </Routes>
    );
};

export default AppRouter;