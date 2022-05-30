import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };

export default function Inputs() {
  const [name, setName] = useState("Test hooka");
  const [rating, setRating] = useState(4);

  return (
    <>
      {name + " " + rating}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input defaultValue="Hello world" inputProps={ariaLabel} />
        <Input placeholder="Placeholder" inputProps={ariaLabel} />
        <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
        <Input defaultValue="Error" error inputProps={ariaLabel} />
      </Box>
    </>
  );
}
