import { Link, useLoaderData } from "react-router";
import './meals-detail.css';


export async function loader() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772");

    return response.json();
}

const MealsDetail = () => {
    const data = useLoaderData();
    const meal = data?.meals?.[0];

    return (
        <>
            <h1>{meal.strMeal}</h1>
            <p>Categorie: {meal.strCategory}</p>
            <p>Keuken: {meal.strArea}</p>
            <Link to="/">Terug naar home</Link>
        </>
    );
};

export default MealsDetail;