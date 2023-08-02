"use client"
import { useState, useEffect } from "react"

export default function Home() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submitData = {name,age}

    try {
      const res = await fetch('http://localhost:3000/api/handleform',{
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(res)
      if(res.ok){
        console.log("Yeai!")
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
    setName('')
    setAge('')
  }

  return (
    <div className=" flex flex-col justify-center items-center w-full p-8 ">
      <h1 className=" w-full text-center m-4 font-semibold text-lg ">GET & POST Request in NextJS Stable App Router</h1>
      <form onSubmit={handleSubmit} className=" flex w-full flex-col justify-center items-center ">
        <div className=" flex w-1/2 justify-center items-center gap-4 ">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter the name"
            onChange={e => setName(e.target.value)}
            className=" border p-2 px-4 rounded outline-none "
          />
          <input
            type="number"
            name="age"
            value={age}
            placeholder="Enter the age"
            onChange={e => setAge(e.target.value)}
            className=" border p-2 px-4 rounded outline-none "
          />
          <button 
          type="submit" 
          className=" border-blue-500 bg-blue-500 text-white p-2 px-4 rounded-md " 
          >Submit</button>
        </div>
      </form>
    </div>
  )
}

