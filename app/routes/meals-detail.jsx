import { Link, useLoaderData } from "react-router";

export async function loader() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772");

    return response.json();
}

const MealsDetail = () => {
    const data = useLoaderData();
    const meal = data?.meals?.[0];

    if (!meal) {
        return (
            <div className="container">
                <div className="post">
                    <h2>Geen maaltijd gevonden</h2>
                    <p>Er ging iets mis bij het ophalen van de details.</p>
                </div>
                <div className="top-buttons">
                    <Link to="/">
                        <button type="button">Terug naar home</button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="post">
                <h2>{meal.strMeal}</h2>
                <p><strong>Categorie:</strong> {meal.strCategory}</p>
                <p><strong>Keuken:</strong> {meal.strArea}</p>
                <p>{meal.strInstructions}</p>
            </div>
            <div className="top-buttons">
                <Link to="/">
                    <button type="button">Terug naar home</button>
                </Link>
            </div>
        </div>
    );
};

export default MealsDetail;