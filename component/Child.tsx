import React from 'react'
import { toast } from 'react-toastify';

export default function Child() {

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handldClick = async () => {
    const updatePromise = wait(3000)
    toast.promise(updatePromise, {
      pending: "Updating ...",
      success: "Successfully updated.",
      error: "Error!",
    })

  }

  return (
    <div>
      <button className='rounded-3xl bg-blue-500 p-3 text-white' onClick={handldClick} >Fetch</button>
    </div>
  )
}
