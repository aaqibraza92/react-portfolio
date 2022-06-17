import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Navigate, useLocation } from "react-router-dom";



const HomeDashboard = () => {

    const navigate = useNavigate();

    if (Cookies.get('loginSuccess')) {
        const loginData = JSON.parse(Cookies.get('loginSuccess'))
         
       } 
       else {
         window.location.href = '/admin/login'
       
       }
      


    return (
        <div>
            <h1>
                Home Dashboard
            </h1>
        </div>
    );
};

export default HomeDashboard;