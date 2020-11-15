import React, { Component } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
export const renewToken= async ()=>{
    const form = new FormData()
    form.set('refresh', Cookies.get("refresh"));
    const response =
    await axios.post('http://localhost:8000/api/token/refresh/', form, {
      headers: { 'Content-Type': 'multipart/form-data'
      },
    })
    console.log(response.data.access)
    Cookies.set("access",response.data.access)
    return response.data.access
}