import { useState,useEffect } from 'react';
import axios from "axios";
import "./style.css";

function Meal() {
    const[items,setItems] = useState([]);

    useEffect(() => {
        axios.get("http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => {
            setItems(res.data.meals);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const itemsList = items.map(({strMeal, strMealThumb,idMeal}) => {
        return(
            <section className="card">
                <img src={strMealThumb} alt="img"/>
                <section className="content">
                    <p>{strMeal}</p>
                    <p>👉ID:#{idMeal}</p>
                </section>
            </section>
        )
    })
    return <div className="items-container">{itemsList}</div>
}

export default Meal