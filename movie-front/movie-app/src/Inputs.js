import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";

const ariaLabel = { "aria-label": "description" };

export default function Inputs() {
  const [name, setName] = useState("Test hooka");
  const [rating, setRating] = useState(4);
  const [movies, setMovies] = useState([]);

  const control = "My  Favorite";

  const handleClick = (e) => {
    e.preventDefault();
    const movie = { name, rating };
    console.log(movie);

    fetch("http://localhost:8080/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then(() => {
      console.log("Weszło");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/test2")
      .then((res) => res.json())
      .then((result) => setMovies(result));
  }, []);

  return (
    <>
      {name + " " + rating}

      {movies.map((item) => (
        <div key={item.id}>
          Id:{item.id} Name: {item.name} Rating: {item.rating}
        </div>
      ))}

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <Button variant="outlined" onClick={handleClick}>
          Ładuj
        </Button>
      </Box>
    </>
  );
}
