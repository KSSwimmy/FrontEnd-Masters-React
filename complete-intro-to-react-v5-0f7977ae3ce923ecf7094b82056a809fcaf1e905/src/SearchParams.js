import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog")
  const [breed, setBreed] = useState("")
  const [breeds, setBreeds] = useState([])

  return (
    <div className="search-params">
      <form>
        <label>
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
            Animal
            <select 
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}> 
            <option>All</option>   
            {ANIMALS.map(animal => ( 
                <option key={animal} value={animal}>{animal}</option>
            ))}
            </select>
        </label>
        <label htmlFor = "breed">
                Breed
                <select
                id ="breed"
                value={breed}
                onChange={e => setBreed(e.target.value)}
                onBlur={e => setBreed(e.target.value)}
                disabled={!breeds.length === 0} 
                >
                    <option>All</option>
                    {breeds.map(breedString => (
                        <option key={breedString} value={breedString}>
                            {breedString}
                        </option>
                    ))}

                </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

//putting the input inside of a label is good for accessability so that if someone clicks on the location that it highlights the correct input.

//location is the current state of location, setLocation is the updated state.

//Hooks never go inside of if statements

//Configuring ESLint fro Hooks - npm i -D eslint-plugin-react-hooks

//onBlur is for Screen Readers. They don't always pick up onChange. (accessability)
