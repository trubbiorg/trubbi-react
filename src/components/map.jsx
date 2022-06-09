import React from "react";
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from "@react-google-maps/api";
import usePlacesautocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox"
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import "@reach/combobox/styles.css"

export default function Places() {
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBruLlaLvMdXzNEjEBD5wHzqULq7Supv58",
        libraries: ['places']
    })

    return isLoaded ? <Map /> : <div>Loading...</div>
}

function Map() {
    const containerStyle = {
        width: '1100px',
        height: '400px'
    };

    const center = {
        lat: -34.6038008,
        lng: -58.3821878
    };

    const center2 = {
        lat: -35.6038008,
        lng: -60.3821878
    };

    const [map, setMap] = React.useState(null)

    const [selected, setSelected] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])

      const onLoadbound = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center2);
        map.fitBounds(bounds);
        setMap(map)
      }, [])

    return (
        <>
            <Grid>
                <PlacesAutocomplete setSelected={setSelected} />
            </Grid>
            <GoogleMap
                zoom={15}
                center={center}
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
            >
                {selected && <Marker position={selected} /> }
            </GoogleMap>
        </>
    )
}

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesautocomplete()

    const handleSelect = async (address) => {
        setValue(address, false)
        clearSuggestions()

        const results = await getGeocode({address})
        const {lat, lng} = await getLatLng(results[0])
        setSelected({lat, lng})
    }

    return (
    <Combobox onSelect={handleSelect} style={{height:50}}>
        <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready}
            className="combobox-input" placeholder="Direccion" />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description}/>)}
                </ComboboxList>
            </ComboboxPopover>
    </Combobox>
    )
}