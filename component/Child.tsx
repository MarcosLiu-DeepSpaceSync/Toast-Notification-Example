import React from 'react'
import { toast } from 'react-toastify';

export default function Child() {

  // const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const wait = (ms: number) => 
    new Promise((_, reject) => setTimeout(() => reject(new Error("Something went wrong!")), ms));

  const handldClick = async () => {
    const updatePromise = wait(3000)
    toast.promise(updatePromise, {
      pending: "Updating ...",
      success: "Successfully updated.",
      error: {
        render({data}) {
          return `Error: ${data}`
        }
      },
    })

  }

  return (
    <div>
      <button className='rounded-3xl bg-blue-500 p-3 text-white' onClick={handldClick} >Fetch</button>
    </div>
  )
}
