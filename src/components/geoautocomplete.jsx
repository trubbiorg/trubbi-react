import React from "react";
import { Card, Grid, Paper, TextField } from '@mui/material';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

export default function GeoAutocomplete() {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <Grid>
                    <Grid>
                        <TextField required id="cardName" label="Dirección" {...getInputProps({ fullWidth: true })} />
                    </Grid>
                    <Grid>
                        {loading ? <Grid>loading...</Grid> : null}

                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                            };

                            return (
                                <div {...getSuggestionItemProps(suggestion, { style } )}>
                                    {suggestion.description}
                                </div>
                            );
                        })}
                    </Grid>
                </Grid>
            )}
        </PlacesAutocomplete>
    );
}