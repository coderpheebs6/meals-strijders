import { Link } from "react-router";

export const loader = async () => {

    const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    ).then((r) => r.json());
    return { categories: data.results };
}

const MealsCategories = ({ loaderData }) => {
    const { categories } = loaderData;

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>Categories</h1>
            {/* <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default MealsCategories;