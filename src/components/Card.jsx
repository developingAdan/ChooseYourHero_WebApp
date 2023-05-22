import React from "react";
import { Link } from "react-router-dom"; 
// what Link does is wrap is it allows for the all the card content to
// be wrapped in that Link

export default function Card({ id, thumbnail, name }) {
    return (
        // this `/${id}` Link specifies where the Link should link to.
        // it links to the id of the hero. (the 2nd GET request from the Interactive Documentation on the website)
        // GET /v1/public/characters/{characterId} (on the website)
        
        <Link to={`/${id}`}>
            <div className="card">
                <img src={thumbnail} alt="thumbnail"/>
                <h1 className="card-name">{name}</h1>
            </div>
        </Link>
            
        
    )
}