import React from "react";
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from "@react-google-maps/api";
import usePlacesautocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox"
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import "@reach/combobox/styles.css"
import { useStateIfMounted } from "use-state-if-mounted";

export default function Places(props) {
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBruLlaLvMdXzNEjEBD5wHzqULq7Supv58",
        libraries: ['places']
    })

    return isLoaded ? <Map {...props} /> : <div>Loading...</div>
}

function Map(props) {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: -34.6038008,
        lng: -58.3821878
    };

    const [map, setMap] = useStateIfMounted(null);

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
                <PlacesAutocomplete setSelected={props.handleAddress} map={map}  />
            </Grid>
            <GoogleMap
                zoom={15}
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {props.eventRequest && props.eventRequest.latlng && <Marker position={props.eventRequest.latlng} />}
            </GoogleMap>
        </>
    )
}

const PlacesAutocomplete = ({ setSelected, map }) => {
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

        const results = await getGeocode({ address  })
        const { lat, lng } = await getLatLng(results[0])
        setSelected(address, { lat, lng })
        map.setZoom(18)
        map.panTo(new window.google.maps.LatLng({ lat, lng }))
    }

    return (
        <Grid>
            <Combobox onSelect={handleSelect} style={{ height: 75, float: 'left', width: '100%' }}>
                <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready}
                    className="combobox-input" as={TextField} label="Direccion" required fullWidth />
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
