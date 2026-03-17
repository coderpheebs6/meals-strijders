import { Link, useLoaderData } from "react-router";

export const clientLoader = async () => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const data = await response.json();
  return { categories: data.categories };
};

const Home = () => {
  const { categories } = useLoaderData();

  const featuredCategory = categories[0]; // Show the first category as preview

  return (
    <div className="container">
      <nav className="top-buttons">
        <Link to="/categories">Categories</Link>
        <Link to="/meals-detail">Latest Meals</Link>
      </nav>
      <div className="category-preview">
        <img src={featuredCategory.strCategoryThumb} alt={featuredCategory.strCategory} />
        <h2>{featuredCategory.strCategory}</h2>
        <p>{featuredCategory.strCategoryDescription.substring(0, 100)}...</p>
        <Link to="/categories">View all categories</Link>
      </div>
    </div>
  );
};

export default Home;
