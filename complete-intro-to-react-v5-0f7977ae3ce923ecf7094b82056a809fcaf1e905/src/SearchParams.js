import React, { useState }  from 'react';

const  SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA")

    return(
        <div className="search-params"> 
            <form>
                <label>
                    Location
                    <input id="location" value={location}
                    placeholder="Location"
                    onChange={event => setLocation(event.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams

//putting the input inside of a label is good for accessability so that if someone clicks on the location that it highlights the correct input. 

//location is the current state of location, setLocation is the updated state.
//Hooks never go inside of if statements 