import { Link } from "react-router";

export const clientLoader = async () => {
    const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    ).then((r) => r.json());
    return { categories: data.results };
}

const MealsCategories = ({ loaderData }) => {
    const { categories } = loaderData;

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
                            <li key={category.id} className="category-item">
                                <Link to={`/meals-details/${category.id}`}>{category.strCategory}</Link>
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