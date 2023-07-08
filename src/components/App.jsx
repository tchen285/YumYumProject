import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import recipes from "../recipes";

function App() {
    return (
        <div>
            <Header />
            <Card
                name={recipes[0].name}
                img={recipes[0].imgURL}
                calaries={recipes[0].calaries}
                cuision={recipes[0].cuision}
                description={recipes[0].description}
            />
            <Card
                name={recipes[1].name}
                img={recipes[1].imgURL}
                calaries={recipes[1].calaries}
                cuision={recipes[1].cuision}
                description={recipes[1].description}
            />
            <Card
                name={recipes[2].name}
                img={recipes[2].imgURL}
                calaries={recipes[2].calaries}
                cuision={recipes[2].cuision}
                description={recipes[2].description}
            />
            <Footer />
        </div>
    );
}

export default App;