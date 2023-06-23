import { useState } from 'react'

import React from 'react';
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';
import Card from '../components/Card';

const IMAGE_SIZE = 'portrait_fantastic';

export default function Home() {
    const [heroes, setHeroes] = useState([]);
    // with the useState() hook in React, we get two things here ^
    // the 1st one is the actual value, the 2nd one is the function to change that value.
    // we want to use that function and change the value, because otherwise you won't
    // trigger a re-rendering of the component itself. 


    let cards = [];
    // if we have heroes (if the list is not empty), we create a card element 
    if (heroes) {
        cards = heroes.map((item) => (
            <Card 
                name={item.name} 
                id={item.id} 
                key={item.id} 
                thumbnail={`${item.thumbnail.path}/${IMAGE_SIZE}.${item.thumbnail.extension}`}/>
                // ^ thumbnail part IMAGE_SIZE is from image variants on website Docs
                // explains it at 59min
        ));
    }

    return (
        <Container>
            <h1 class="homePage_Text">Wolverine is the best Marvel character.</h1>
            <h1 class="homePage_Text">Spider-Man is the 2nd best.</h1>
            <h3 class="homePage_Text">(search for your favorite superhero below!)</h3>
            <SearchBar setter={setHeroes} />
            <Grid>
                {cards ? cards : ""}
                {/* here ^ we verify if the cards is empty, if so we display an empty string, if not empty we display them */}
            </Grid>
        </Container>
    )
}