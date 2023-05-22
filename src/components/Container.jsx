import React from "react";
// he explains why building things this way isn't the best idea around the 28min mark

// then on 32min mark he explains how it's convenient. 
// he explains about reusability by using this component, instead of having to write over and over

export default function Container( {children} ) {
    return (
        <main className="container">
            {children}
        </main>
    )
}