import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useEffect } from "react";
import genericDataService from "../helpers/genericDataService";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const eventsDataService = new genericDataService("/categories");

export default function MultipleSelectChip(props) {

  const [categories, setCategories] = React.useState([]);

  // const [userCategories, setUserCategories] = React.useState([]);

  useEffect(() => {
    props.loading(true);
    eventsDataService.index().then(
      response => {
        setCategories(response.data.result);
      }
    ).catch((error) => {
      if(error.response.status === 401){
        localStorage.clear();
      }
    }).finally(() => {
      props.loading(false);
    });
  }, [])

  const handleChange = (event) => {
    const { target: { value } } = event;
    props.setEventRequest({ ...props.eventRequest, 'categories': (typeof value === "string" ? value.split(",") : value) });
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-chip-label">Categorias*</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={props.eventRequest.categories ?? []}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Categorias" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.name} label={value.name} />
              ))}
            </Box>
          )}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
