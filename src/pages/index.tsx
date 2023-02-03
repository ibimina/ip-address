import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="Get location, timezone and isp of any IP Address" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>IP Address Tracker</h1>
        <form>
          <input type="number" name="ipaddress" placeholder='search for any ip address or domain' />
          <input type="submit" value=">" />
        </form>
      </header>
      <main>
        <article>
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
