import React from "react"
import Placesautocomplete, {
    geocodeByAdress,
    getLatLng
} from "react-places-autocomplete"

export default function GeoAutocomplete() {
    const [address, setAddress] = React.useState("")

    const handleSelect = async (value) => {}
return <div>
    <Placesautocomplete value={address} 
        onChange={setAddress}
        onSelect={handleSelect}>
            {(getInputProps, suggestions, getSuggestionItemProps, loading) => 
            <div>
                <input {...getInputProps({ placeholder: "Type address"})}/>
                </div>}
    </Placesautocomplete>
</div>
}