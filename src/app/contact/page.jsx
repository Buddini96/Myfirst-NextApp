import Link from 'next/link'
import React from 'react'
import styles from './contact.module.css'

function page() {
  return (
    <>  
    <h1>Contact page</h1>
    <Link href="/" className={styles.link}>Home</Link>
    </>
  )
}

export default page