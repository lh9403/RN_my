/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: lh
 * @Date: 2020-05-29 12:09:36
 * @LastEditors: lh
 * @LastEditTime: 2020-06-11 10:46:38
 */ 
import React from 'react';

const baseUrl = 'http://192.168.0.85:3000'

function post(url, body) {
  return new Promise((resolve, reject) => {
    return fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        isDevelop: true
      },
      body: JSON.stringify(body),
    })
      .then(data => {
        resolve(data.json());
      })
      .catch(e => {
        reject(e);
      });
  });
}

export {post}
