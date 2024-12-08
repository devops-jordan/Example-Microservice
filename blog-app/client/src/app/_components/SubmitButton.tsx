"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {

  const { pending } = useFormStatus()
  return (
    <button
      className={`rounded-sm text-[15px] px-[7px] shadow-md text-white relative ${!pending ? "bg-green-600  transition-all duration-150 hover:scale-105 cursor-pointer" : 'bg-red-700'}`}
      // onClick={handle}
      type='submit'
      disabled={pending}
    >
      Submit
      <span className='animate-spin text-[10px] absolute right-0 top-0'> {!pending ? "" : "🔃"}</span>
    </button>
  )
}

export default SubmitButton