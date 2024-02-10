 'use client'
 import React from 'react'
 
 function Button() {
    const handleClick = () => {
        alert("hellow you clicked the button")
    }
   return (
    <button onClick={handleClick}>Click me</button>
   )
 }
 
 export default Button