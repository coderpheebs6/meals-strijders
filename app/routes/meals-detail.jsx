import { Link, useLoaderData } from "react-router";

export async function loader({ params }) {
    const id = params?.id;

    if (id) {
        const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const categoriesData = await categoriesResponse.json();
        const selectedCategory = categoriesData?.categories?.find(
            (category) => category.idCategory === id
        );

        if (selectedCategory) {
            return { type: "category", category: selectedCategory };
        }

        const mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const mealData = await mealResponse.json();
        return { type: "meal", meal: mealData?.meals?.[0] };
    }

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772");
    const data = await response.json();
    return { type: "meal", meal: data?.meals?.[0] };
}

const MealsDetail = () => {
    const data = useLoaderData();
    const meal = data?.type === "meal" ? data?.meal : null;
    const category = data?.type === "category" ? data?.category : null;

    if (category) {
        return (
            <div className="container">
                <div className="post">
                    <img src={category.strCategoryThumb} alt={category.strCategory} />
                    <h2>{category.strCategory}</h2>
                    <p>{category.strCategoryDescription}</p>
                </div>
                <div className="top-buttons">
                    <Link to="/">
                        <button type="button">Terug naar home</button>
                    </Link>
                </div>
            </div>
        );
    }

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