"use client"
import React from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import Child from './Child'

export default function Parent() {
  return (
    <div>
      <div>
        <Child/>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  )
}
