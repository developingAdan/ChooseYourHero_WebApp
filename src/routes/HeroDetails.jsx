import React from 'react';
import { useState, useEffect } from "react";
// the useState keeps track of your data, the state in your component
// the useEffect will allow you to run a particular function dependent
// on variables. 

// Import Hooks
import { useParams } from "react-router-dom";

// Import Utils
import { fetchHero } from "../utils/utils"

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }  

//  ^^ The shuffleArray function uses the Fisher-Yates algorithm to shuffle the array 
//   in place. By applying the shuffleArray function before slicing the array to 
//   get the first 20 items, you can display 20 random comics from the API response.

export default function HeroDetails() {

    let { id } = useParams();

    const [hero, setHero] = useState();

    useEffect(() => {
        fetchHero(id)
        .then(data => setHero(data[0]))
        .catch(err => console.error(err))
    }, [])
    // here ^ with the empty array, we are say there are NO dependencies, so we just run
    // once. If we don't include it, it considers it like a dependency has changed and
    // so it will re-trigger the rendering. React works this way. 

    if (!hero) return; 
    // ^ highly recommended to include conditional rendering. if hero doesn't exist, don't do anything.

    // console.log(`hero series are -- ${JSON.stringify(hero.series)}`)
    // console.log(`hero -- ${JSON.stringify(hero)}`)
    // console.log(`hero comics are -- ${JSON.stringify(hero.comics)}`)
    // console.log(`hero comic ITEMS are -- ${JSON.stringify(hero.comics.items)}`)
    console.log(`hero stories ITEMS are -- ${JSON.stringify(hero.stories.items)}`)

    const comics = hero.comics?.items || [];
    // const creators = hero.

    // console.table(`comics is -- ${JSON.stringify(comics)}`)
    return (
        <div className="container large">
            <div className="hero__details-container">
                <div className="hero__details_img_container">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero image full size" />
                </div>
                <div className="hero__details">    
                    <h4>Name</h4>
                    <p>{hero.name}</p>
                    {hero.description ? (<>
                        <h4>Description</h4>
                        <p>{hero.description}</p>
                    </>) : null}
                    {/* here ^ we do NOT run the risk of "not rendering a hero" because of the conditional rendering check above  */}
                    <div className="hero__series">
                        <h4>Stories featured in:</h4>
                        <ul>
                            {
                                // hero.comics.items
                                //     .sort((a, b) => b - a)
                                //     .map(comicsItem => <li key={Math.random() * 1000}>{comicsItem.name}</li>)
                                shuffleArray(hero.stories.items)
                                                .sort((a, b) => a - b)
                                                .slice(0, 20) // this is how we display only 5 or 20 comics, using slice() method
                                                .map(comicsItem => <li key={comicsItem.resourceURI}>{comicsItem.name}</li>)
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}