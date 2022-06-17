import Auth from 'Helpers/Auth/Auth';
import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default function Logout() {

    useEffect(() => {
        if (Auth.getAuth()) {
            Auth.removeAuth();
        } else {
            window.location.pathname = "/login";
        }
    }, [])

    const handleClick = () => {
        window.location.pathname = "/login";
    }

    return (
        <section className="p_t_80 p_b_80">
            <div className="container">
                <div className="row justify-content-center">
                    <div style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column" }}>
                        <h2>Successfully logout.</h2>
                        <h4><Link onClick={handleClick}> Want to login again ?</Link></h4>
                    </div>
                </div>
            </div>
        </section>

    )

}