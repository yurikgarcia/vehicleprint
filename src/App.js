
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Button from '@mui/material/Button';



export const ThemeContext = React.createContext();

export default function App() {

  const [vehicle, setVehicle] = useState({
    make: '',
    model: '',
    plate: '',
  });

    let componentRef = useRef();



    console.log(vehicle);

  return (
    <>
    <ThemeContext.Provider value={vehicle}>

      <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
          />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
    
        <TextField
          id="outlined-error-helper-text"
          label="Make"
          onChange={(e) => setVehicle({ ...vehicle,  make: e.target.value })}
          />
        <TextField
          id="outlined-error-helper-text"
          label="Model"
          onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
          />
        <TextField
          id="outlined-error-helper-text"
          label="Plate"
          onChange={(e) => setVehicle({ ...vehicle, plate: e.target.value })}
          />
    </Box>
    <h1>{vehicle.make}</h1>
    <h1>{vehicle.model}</h1>
    <h1>{vehicle.plate}</h1>
      </div>
          </ThemeContext.Provider>
    </>
  );
}

// component to be printed
//pass the variable name vehicle to the component




class ComponentToPrint extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {vehicle => (
          <div>
        {vehicle.make}
        {vehicle.model}
        {vehicle.plate}
          </div>
        )}
      </ThemeContext.Consumer>


    );
  }
}