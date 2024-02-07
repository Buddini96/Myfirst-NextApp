import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <ul className="body">
      <li><a href="/" >Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact us</a></li>
      <li><Link className={styles.link} href="/about/branches">Branches</Link></li>
      <li><Link className={styles.link} href="/products/veggies">Veggies</Link></li>
    </ul>

    <Link href="https://nextjs.org" target="_blank" id={styles.specialLink}>Next Js</Link>
    </>
    
  );
}
