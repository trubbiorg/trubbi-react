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

    const [map, setMap] = React.useState(null)

    const [selected, setSelected] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.panTo(new window.google.maps.LatLng(center))
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return (
        <>
            <Grid>
                <PlacesAutocomplete setSelected={setSelected} setMap={setMap} map={map} />
            </Grid>
            <GoogleMap
                zoom={15}
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {selected && <Marker position={selected} />}
            </GoogleMap>
        </>
    )
}

const PlacesAutocomplete = ({ setSelected, map, setMap }) => {
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

        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])
        setSelected({ lat, lng })
        map.setZoom(18)
        map.panTo(new window.google.maps.LatLng({ lat, lng }))
    }

    return (
        <Grid>
            <Combobox onSelect={handleSelect} fullwidth style={{ height: 75, float: 'left', width: '100%' }}>
                <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready}
                    className="combobox-input" placeholder="Direccion*" as={TextField} label="Direccion" fullWidth />
                <ComboboxPopover>
                    <ComboboxList style={{
                        color: "#454545",
                        fontStyle: "italic"
                    }}>
                        {status === "OK" && data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </Grid>

    )
}
