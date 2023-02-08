import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
const Map = (prop: { lat: number, lng: number ,ip:string }) => {
    return (<MapContainer center={[prop.lat,prop.lng]} zoom={13} scrollWheelZoom={false} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[ prop.lat,prop.lng]}>
            <Popup>
                {prop.ip}
            </Popup>
        </Marker>
    </MapContainer>)
}
export default Map