import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import { useState } from 'react'

interface IpAddress {
  ip: string,
  location: {
    region: string
    postalCode: string
    city: string
    lat: number
    lng: number
    timezone: string
  },
  isp: string
}
export default function Home() {
  const [ipaddress,setIpaddress] = useState("")
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="Get location, timezone and isp of any IP Address" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>IP Address Tracker</h1>
        <form className={styles.form}>
          <input type="number" name="ipaddress" placeholder='search for any ip address or domain' className={styles.ip}/>
          <input type="submit" value=">" className={styles.submit}/>
        </form>
      </header>
      <main className={styles.wrap}>
        <article className={styles.details}>
          <div>
            <p>IP ADDRESS</p>
            <p></p>
          </div>
          <div>
            <p>LOCATION</p>
            <p></p>
          </div>  <div>
            <p>TIMEZONE</p>
            <p></p>
          </div>  <div>
            <p>ISP</p>
            <p></p>
          </div>
        </article>
        <div className="map"></div>
      </main>
    </>
  )
}
