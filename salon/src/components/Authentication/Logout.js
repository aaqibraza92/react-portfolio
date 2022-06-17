import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../helpers/Auth/Auth";
import GLocalStorage from "../../helpers/Global/GLocalStorage";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    Auth.removeToken();
    Auth.removeLoginAuth();
    GLocalStorage.Remove("user-role")
    GLocalStorage.Remove("user")
    navigate('/login')
  }, []);
  return <></>;
}
