import { useEffect, useState } from "react"

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
const useFetch = (ipaddress: string) => {
    const [details, setDetails] = useState<null | IpAddress>(null)

    useEffect(() => {
 
            const getData = async () => {
                const res = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_iAOqOvn5JC233JQLxCkk34jznMi2n&ipAddress=" + ipaddress)
                const data = await res.json()
                setDetails(data)
            }
            getData()
     
   
    }, [ipaddress])
    return { details}
}
export default useFetch