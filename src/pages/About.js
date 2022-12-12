import { useState, useEffect } from "react";

function About(props) {
// create state to hold about data
  const [about, setAbout] = useState(null);

// create function to make api call
  const getAboutData = () => {
    
// make api call and get response
    fetch('./abouts.json')
    .then(response => response.json())
    .then(response => {
        setAbout(response)
        })
    };
  console.log(about)
// make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData()
    },[]);

// define a function that will return the JSX needed once we get the data
  const loading = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

// if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loading() : <h1>Loading...</h1>;
}

export default About;