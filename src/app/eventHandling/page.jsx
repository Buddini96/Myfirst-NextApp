'use client'
import React, { useState } from 'react'

function page() {
    const [inputtext, setinputtext] = useState("")
    const handleClick = (p1) => { 
        alert(p1)
    }

    const handleChange =(e) => {
        setinputtext(e.target.value)
    }

  return (
    <>
    <h1>Event Handling, Creating Functions & Managing States</h1>
    <input type='text' onChange={handleChange}/>
    <button onClick={() => handleClick("hello")}>Click here</button>
    <br></br>
    <p>Value is : {inputtext}</p>
    <br></br>

    {inputtext == "buddini" && 
        <div>
            <h2>Members Area</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia accusantium dicta suscipit fugit iste dignissimos eum neque nesciunt quaerat eos!</p>
        </div>
    }
    </>
  )
}

export default page