import axios from 'axios'
import React from 'react'

export default function MyInterceptor1() {
  axios.interceptors.request.use((req) => {
    // console.log('my Interceptor 1 ', req)
    // if (req.url.includes('github')) {
    req.headers.Authorization = 'My secret CODE'
    // }
    return req;
  })
}

export function requestStartedInterceptor() {
  axios.interceptors.request.use((req) => {
    console.log('requestStartedInterceptor')
    req.meta = req.meta || {};
    req.meta.requestStartedAt = new Date().getTime();
    return req;

  })
}

export function responseReceivedInterceptor() {
  axios.interceptors.response.use((res) => {
    res.durationInMS = new Date().getTime() - res.config.meta.requestStartedAt
    return res;
  },
    err => {
      err.durationInMS = new Date().getTime() - err.config.meta.requestStartedAt;
      throw err;
    })
}