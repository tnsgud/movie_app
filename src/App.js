/** @format */

import React from "react";
import PropTypes from "prop-types";

function Food({ name, image }) {
    console.log(image);
    return (
        <div>
            <h2>I like {name}</h2>

            <img src={image} alt={name} />
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name: "raman",
        image: "https://cdn.pixabay.com/photo/2019/11/23/15/26/ramen-4647408_960_720.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "kimchi",
        image: "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465_960_720.jpg",
        rating: 5,
    },
    {
        id: 3,
        name: "banana",
        image: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg",
        rating: 4,
    },
    {
        id: 4,
        name: "apple",
        image: "https://cdn.pixabay.com/photo/2016/08/12/22/38/apple-1589874_960_720.jpg",
        rating: 3,
    },
];

function App() {
    return (
        <div>
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} image={dish.image} />
            ))}
        </div>
    );
}

export default App;
