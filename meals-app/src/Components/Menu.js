import { useEffect, useState } from "react";
import axios from 'axios';
import FoodItem from "./FoodItem";

function Menu() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
            .then(response => {
                setItems([...response.data.meals])
            }).catch(error => {
                window.alert("Error occurred while loading the items!");
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    },[]);

    return (
        <ul className="list-group list-group-horizontal flex-wrap justify-content-center">
            {
                items.map(item => 
                    <FoodItem item={item} />
                )
            }
        </ul>
    )
}

export default Menu;