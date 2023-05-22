import React from 'react';
import { useState, useEffect } from "react";
// the useState keeps track of your data, the state in your component
// the useEffect will allow you to run a particular function dependent
// on variables. 

// Import Hooks
import { useParams } from "react-router-dom";

// Import Utils
import { fetchHero } from "../utils/utils"

export default function HeroDetails() {

    let { id } = useParams(); // destructuring to get access to... ?

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
    console.log(`hero comics are -- ${JSON.stringify(hero.comics.items)}`)

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
                        <h4>Comics featured in:</h4>
                        <ul>
                            {
                                hero.comics.items.map(comicsItem => <li key={Math.random() * 1000}>{comicsItem.name}</li>)
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}