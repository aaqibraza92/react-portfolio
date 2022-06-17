import React from 'react';
import Auth from '../Auth';
import { BASE_URL } from 'Config';
import { notify } from 'react-notify-toast';


function status(res) {

    console.log(res, 'status')
    if (res.status >= 200 && res.status < 400) {
        return Promise.resolve(res);
    }
    else if (res.status === 401) {
        // unauthorized
        return Promise.reject(res);
    }
    return Promise.reject(res);
}

function json(res) {
    if (
        res &&
        res.headers &&
        res.headers.get("content-type").startsWith("application/json")
    )
        return res.json().then(response => {

            // console.log(response, 'json')
            if (response.statusCode >= 200 && response.statusCode < 400 && response.statusCode != 401) {
                return response;
            } else if (response.statusCode == 401) {
                notify.show(response.global_error, "error", 2500);
            } else {
                // Notify
                notify.show(response.message, "error", 2500);
                throw response;
            }
        });

    return {};
}


function parseErrorMessage(response) {
    var errorMsg = response.message != "" ? response.message : response.global_error;
    if (errorMsg == "") {
        for (var key in response.error) {
            errorMsg = response.error[key];
            if (errorMsg != "") {
                break;
            }
        }
    }
    return errorMsg
}

function error(res, errorNotifyHide) {
    if (
        res &&
        res.headers &&
        res.headers.get("content-type").startsWith("application/json")
    ) {
        return res.json().then(err => {
            // Notify
            if (err.statusCode == 401) {
                notify.show(err.global_error, "error", 2500);
                Auth.logout()
                // History.push('/');
                // window.location.reload()
            } else {
                if (!errorNotifyHide) {
                    // notify.show(parseErrorMessage(err), "error", 2500);
                }
            }
            throw err;
        });
    }

    if (res) {
        throw res;
    }

    return {};
}

export function post(url, body = {}, errorNotifyHide = false,) {
    let auth = Auth.getAuth();
     const token = (auth && auth.token) ? auth.token : null;
    console.log(token);
    let api_url = url;
    return fetch(api_url, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body)
    })
        .then((result) => result.json())
        .then(
            (data) =>  data,
            (error) => console.log(error)
        );
}

export function get(url, body = {}, errorNotifyHide = false,) {
    const auth = Auth.getAuth();

    const token = (!!auth && auth) || null;
    // console.log('hello')
    let api_url = BASE_URL + url;
    const settings =
    {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
        }
    }

    console.log(api_url);


    // return fetch(api_url, settings)
    //     .then(res => res.json())
    //     .then((result) => {
    //         console.log("Result : " + result);
    //     }, (error) => {
    //         console.log("Error : " + error);
    //     })

    return fetch(api_url, settings)
        // .then(status)
        .then(json)
        // .catch((res) => error(res, errorNotifyHide));
        .catch((res) => {
            console.log(res)
            notify.show(res.message, "error", 2500);
        });
}


export function imagePost(url, body = {}, errorNotifyHide = false,) {
    const auth = Auth.getAuth();

    const token = (!!auth && auth) || null;
    // console.log('hello')
    let api_url = BASE_URL + url;
    const settings =
    {
        method: "POST",
        body: body,

        headers: {
            Authorization: "Bearer " + token,
        }
    }


    return fetch(api_url, settings)

        .then(response => response.json())
}


export default { post, get, imagePost };