import '../css/country.css';
import React, {useRef, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {countries} from "../static/country";
import {List,Divider} from "@mui/material"
import { UilSearch } from '@iconscout/react-unicons'
import mapboxgl from 'mapbox-gl';
import ActionAreaCard from "../Component/card";
import { SearchApi } from "../request/api";

export default function MyComponent() {
    const options = countries.map((item,id)=>{
        return {label:item,id:id}
    })

    options.sort((a, b) => {
        if (a.label.toLowerCase() < b.label.toLowerCase()) {
            return -1;
        }
        if (a.label.toLowerCase() > b.label.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    const mapContainer = useRef(null);
    const autocompleteRef = useRef<HTMLDivElement>(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(1.5);
    const [location,setLocation] = useState();
    const [text,setText] = useState({'lng':lng, 'lat':lat})
    const [country,setCountry] = useState([])

    useEffect(()=>{
        let params = {'name':'Ireland'}
        SearchApi({params}).then(res => {
            res.map((i:any)=>{
                setLocation(i)
                setLng(i.lng)
                setLat(i.lat)
            })
            setCountry(res)
        }).catch(function (err) {
            console.log(err)
        })
    },[])

    const handleButtonClick = () => {
        const inputText = autocompleteRef.current?.querySelector('input')?.value;
        let params = {'name':inputText}
        SearchApi({params}).then(res => {
            res.map((i:any)=>{
                setLocation(i)
                setLng(i.lng)
                setLat(i.lat)
            })
            setCountry(res)
        }).catch(function (err) {
            console.log(err)
        })
    }

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoieGtvbmciLCJhIjoiY2xlOTQ2Z2l4MGx4MDNwbWVybnd6d3h6YyJ9.YlGtHyrIuAzzcf9ubGP5rA';
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [lng, lat],
            zoom: zoom
        });
        if(country){
            country.forEach((i)=>{
                const marker = new mapboxgl.Marker().setLngLat([i.lng, i.lat]).addTo(map.current);
                console.log(i)
                marker.getElement().addEventListener('click', () => {
                    setLocation(i)
                })
            })
        }
    },[lat,lng]);

    return (
        <div>
            <div className="home">
                <div className="search">
                    <div ref={mapContainer} className="map-container" />
                    <div>
                        <div className="header">
                            <Autocomplete
                                includeInputInList
                                options={options}
                                sx={{ width: 300 ,height:100}}
                                ref={autocompleteRef}
                                renderInput={(params) => <TextField {...params} label="ENTER COUNTRY" variant="standard"/>}
                            />
                            <button className="button" onClick={handleButtonClick}><UilSearch/></button>
                        </div>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                                color: '#F9624C',
                            }}
                        >
                            <h3>COUNTRIES</h3>
                            <Divider component="li" style={{borderColor:"#F9624C"}}/>
                        </List>
                        <ActionAreaCard props={location}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
