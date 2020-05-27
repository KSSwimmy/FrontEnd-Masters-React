import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      //const breedStrings = breeds.map(({ breedObj }) => breedObj.name);same thing as above
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  //useEffect is disconnected from when the render is happening. This is scheduling this function to run after the render (down below) happens

  return (
    <div className="search-params">
      <form
    onSubmit={e => {
    e.preventDefault();
    requestPets();
  }}
>
        <label>
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
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

//useEffect take the place of several life cycle keywords. (componentDidMount, componentWillUnmount, and componentDidUpdate)
