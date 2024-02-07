import Link from 'next/link'
import React from 'react'

function page() {
    const vegis = [
        {
            id:1,
            veginame: "Broccoli"
        },
        {
            id:2,
            veginame: "Spinash"
        },
        {
            id:3,
            veginame: "Carrot"
        },
        {
            id:4,
            veginame: "Tommatoes"
        },
        {
            id:5,
            veginame: "Potatoes"
        },
    ]
  return (
    <>
    <div>Vegies page</div>
    <br></br>
        {/* <ul>
        <li><Link href="/products/veggies/broccoli">Broccoli</Link></li>
        <li><Link href="/products/veggies/spinash">Spinash</Link></li>
        </ul> */}

        <ul>
            {vegis.map((vegi) => {
                return (
                    <li><Link href={`/products/veggies/${vegi.veginame}`}>{vegi.veginame}</Link></li>
                )
            })

            }
        </ul>
    </>
  )
}

export default page