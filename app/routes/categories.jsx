import { Link, useLoaderData } from "react-router";

export const clientLoader = async () => {
    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    const categories = await Promise.all(
        data.categories.map(async (category) => {
            const mealsResponse = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category.strCategory)}`
            );
            const mealsData = await mealsResponse.json();

            return {
                ...category,
                previewMealId: mealsData.meals?.[0]?.idMeal ?? null,
            };
        })
    );

    return { categories };
}

const MealsCategories = () => {
    const { categories } = useLoaderData();

    return (
        <div className="container categories-page">
            <nav className="top-buttons">
                <Link to="/" className="nav-button">Home</Link>
            </nav>
            <div className="post categories-post">
                <h1 className="categories-title">Categories</h1>
                {categories.length > 0 ? (
                    <ul className="categories-list">
                        {categories.map((category) => (
                            <li key={category.idCategory} className="category-item">
                                <Link to={category.previewMealId ? `/meals-detail?id=${category.previewMealId}` : "/latest-meals"}>
                                    {category.strCategory}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="categories-empty">No categories found yet.</p>
                )}
            </div>
        </div>
    )
}

export default MealsCategories;