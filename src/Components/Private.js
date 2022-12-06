import { Outlet } from "react-router-dom";
import { useAuth } from "../Utils/UseAuth.js";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Loading from "./Loading.js";
import Admin from "../Admin/Home";


import { Route } from "react-router-dom";
export default function Private() {

    const { user, refreshUser, logout } = useAuth();
    const [expire, setExpire] = useState('');

    useEffect(() => {
        refreshToken();
    })

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token')
            refreshUser({ data: response.data.accessToken })
            const decoded = jwt_decode(response.data.accessToken)
            setExpire(decoded.exp)
        } catch (error) {
            if (error.response) {
                logout()
                console.log("Error while trying to refresh access Token")
            }
        }
    }

    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date()
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token')
            config.headers.Authorization = `Bearer ${response.data.accessToken}`
            refreshUser({ data: response.data.accessToken })
            const decoded = jwt_decode(response.data.accessToken)
            setExpire(decoded.exp)
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    return (
        <>
            { user ? <>
            <Admin />            
            <Outlet/> 
            </>
            : <Loading/>}
        </>
    )
}