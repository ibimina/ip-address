import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import useFetch from '@/useFetch'

const Map = dynamic(
  () => import('../components/map'), // replace '@components/map' with your component's location
  { ssr: false } // This line is important. It's what prevents server-side render
)
export default function Home() {
  const [ipaddress, setIpaddress] = useState("")
  const [display, setDisplay] = useState('false')
  const [err, setErr] = useState("")
  const { details } = useFetch(ipaddress)

  const validateIpaddress = (text: string) => {
    let pattern = (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).test(text)
    if (pattern) {
      setIpaddress(text)
    } else {
      setDisplay('true')
      setErr(text)
    }
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      ipaddress: { value: string };
    };
    if (target.ipaddress.value.trim()) {
      validateIpaddress(target.ipaddress.value)
    }

  }
  const closeModal = (e: React.MouseEvent) => {
    setDisplay("false")
    setErr("")
    document.querySelector("form")!.reset()
  }
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
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="ipaddress" placeholder='search for any ip address or domain' className={styles.ip} />
          <input type="submit" value="" className={styles.submit} />
        </form>
      </header>
      <div className={styles.modalcon} data-visible={display}>
        
        <div className={styles.modal}>
          <p>Oops!! <span className={styles.bold}>{"'"}{err} {"'"}</span>is not a valid IP Address</p>
       <button onClick={closeModal} aria-label='close modal' className={styles.close}></button>
        </div>
      </div>
      <article className={styles.details}>
        <div className={styles.box}>
          <p className={styles.small}>IP ADDRESS</p>
          <p className={styles.bold}>{details?.ip}</p>
        </div>
        <div className={styles.infocon}>
          <p className={styles.small}>LOCATION</p>
          <p className={styles.bold}>{details?.location?.city}{details?.location.region}{details?.location.postalCode}</p>
        </div>  <div className={styles.infocon}>
          <p className={styles.small}>TIMEZONE</p>
          <p className={styles.bold}>UTC{details?.location?.timezone}</p>
        </div>  <div className={styles.infocon}>
          <p>ISP</p>
          <p className={styles.bold}>{details?.isp}</p>
        </div>
      </article>
      <main className={styles.wrap}>
        <div className={styles.map}>
          {details !== null && <Map lat={details?.location.lat} lng={details?.location.lng} ip={details?.ip} />}
        </div>

      </main>
    </>
  )
}
