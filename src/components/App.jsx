import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import recipes from "../recipes";

function createCard(recipes) {
    return (
        <Card 
            key={recipes.id}
            name={recipes.name}
            img={recipes.imgURL}
            calaries={recipes.calaries}
            cuision={recipes.cuision}
            description={recipes.description}
        />
    )
}

function App() {
    return (
        <div>
            <Header />
            {recipes.map(createCard)}
            <Footer />
        </div>
    );
}

export default App;