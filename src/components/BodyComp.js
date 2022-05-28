import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Papa from "papaparse";
import Button from "@mui/material/Button";
import DataGridMUI from "./DataGridMUI";
import TextField from "@mui/material/TextField";

export default function BodyComp() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleChange = (event) => {
    console.log("The Query", event.target.value);
    setQuery(event.target.value);
    setVisible(true);
  };
  const handleExecute = (event) => {
    console.log("Inside execute");
    setQuery(1);
    setVisible(true);
  };
  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(inputFile);
      reader.onload = async ({ target }) => {
        const csv = Papa.parse(target.result, { header: true });
        const parsedData = csv?.data;

        setData(parsedData);
      };
    }
  };
  console.log(data);
  console.log(query);
  return (
    <div className="body-jsx">
      <div className="link-tree">
        <span className="link-leaf">
          <a
            href="https://www.w3schools.com/sql/sql_select.asp"
            target="_blank"
          >
            Select Query
          </a>
        </span>
        <span className="link-leaf">
          <a
            href="https://www.w3schools.com/sql/sql_update.asp"
            target="_blank"
          >
            Update Query
          </a>
        </span>
        <span className="link-leaf">
          <a
            href="https://www.w3schools.com/sql/sql_delete.asp"
            target="_blank"
          >
            Delete Query
          </a>
        </span>
      </div>

      <div className="choose_file">
        <label htmlFor="csvInput" style={{ padding: "20px" }}>
          Choose a CSV File
        </label>
        <Button variant="contained" component="span">
          <input
            onChange={handleFileChange}
            id="csvInput"
            name="file"
            type="File"
          />
        </Button>
      </div>
      <div>
        <div className="query-text">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter your query or select below"
            variant="outlined"
          />
          <Button onClick={handleExecute} style={{display:"flex"}}variant="contained" component="span">
            {" "}
            Execute
          </Button>
        </div>
      </div>
      <div className="dropDownMenu">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Query</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={query}
            label="query"
            onChange={handleChange}
          >
            <MenuItem value={1}>Select * from products ;</MenuItem>
            <MenuItem value={2}>
              Select * from products where unit_stock {">"} 15 ;{" "}
            </MenuItem>
            <MenuItem value={3}>
              Delete from products where p_id="P03" ;{" "}
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <DataGridMUI vis={visible} q={query} />
    </div>
  );
}
