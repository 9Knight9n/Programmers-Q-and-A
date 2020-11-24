import React, { Component } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
export const renewToken= async ()=>{
  try{
    console.log("Renewing Token")
    const form = new FormData()
    if (!Cookies.get("refresh"))
    {
      console.log("Can't renew Token:no Refresh token found maybe try loging in first!")
      return false
    }
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
  catch(error){
    handleError(error)
``}
    
}

const handleError= async (error)=>{
  if (error.response) {
    // Request made and server responded
    console.log("Request made and server responded an error")
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log("The request was made but no response was received")
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Something happened in setting up the request that triggered an Error")
    console.log('Error', error.message);
  }
}

export const request= async (config)=>{
  let token = null;
  if(config.needToken){
    token = Cookies.get("access")
    if(isExpired(Cookies.get("access"))){
      token=await renewToken()
      if(!token)
        return false
    }
    token = "Bearer "+token;
  }
  let form = new FormData();
  for(let i=0;i<formKey.length;i++){
    form.set(formKey[i], formValue[i]);
  }
  try{
    if(config.type=="post"){
      const response =
            await axios.post(url, form, {
            headers: { 'Content-Type': 'multipart/form-data',
                    'Authorization': token
            },
            })
      return response
    }
    else if(config.type=="get"){
      const response =
            await axios.get(url, form, {
            headers: { 'Content-Type': 'multipart/form-data',
                    'Authorization': token
            },
            })
      return response
    }
    else{
      console.log("Type is incorrect")
      return false
    }
  }
  catch(error){
    handleError(error)
  }
}
