import { Link, useLoaderData, useSearchParams } from "react-router";
import './meals-detail.css';

export async function loader({ request }) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id') || '52772'; // Default to 52772 if no id

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();

    // Add to recent meals in localStorage
    if (typeof window !== 'undefined') {
        const recent = JSON.parse(localStorage.getItem('recentMeals') || '[]');
        if (!recent.includes(id)) {
            recent.unshift(id);
            if (recent.length > 3) recent.pop();
            localStorage.setItem('recentMeals', JSON.stringify(recent));
        }
    }

    return data;
}

const MealsDetail = () => {
    const data = useLoaderData();
    const meal = data?.meals?.[0];

    if (!meal) {
        return <div className="container"><p>Meal not found</p></div>;
    }

    return (
        <div className="container">
            <div className="meal-detail">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                <h1>{meal.strMeal}</h1>
                <p><strong>Categorie:</strong> {meal.strCategory}</p>
                <p><strong>Keuken:</strong> {meal.strArea}</p>
                <p><strong>Instructies:</strong> {meal.strInstructions}</p>
                <Link to="/" className="back-link">Terug naar home</Link>
            </div>
        </div>
    );
};

export default MealsDetail;