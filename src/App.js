import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    //make sure the rentalAPI is running in port 3005
    //or edit the url here and in package.json
    //CORS must be working (should be in the api)
    const queryParams = new URLSearchParams(window.location.search);
    const userName = queryParams.get('name');
    console.log(userName);
    
    const url = "http://localhost:3005/rentals?rentalUser="+ userName;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        for (let i = 0; i < json.length; i++) {
          //var jsonObject = json[i].replaceAll(`'`, `"`);
          console.log(json[i].id);
          render (
            <div>
              <img src={json[i].img} width="200" height="300" />
              <h1>{json[i].title}</h1>
              <h2>{json[i].console.join(' ')}</h2>
              <p>{json[i].released}</p>
              <p>{json[i].rating}</p>
              <p>{json[i].descrip}</p>

            </div>
            
          )
        }     
        } catch (error) {
        console.log("error", error);
        } 
    };
    fetchData();
  }, []);
  
}

export default App;

