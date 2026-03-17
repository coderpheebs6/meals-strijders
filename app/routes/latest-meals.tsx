import { Link, useLoaderData } from "react-router";

export const clientLoader = async () => {
  // Load recent meal IDs from localStorage
  let recentMealIds = [];
  if (typeof window !== 'undefined') {
    recentMealIds = JSON.parse(localStorage.getItem('recentMeals') || '[]');
  }

  // If no recent, use some defaults
  if (recentMealIds.length === 0) {
    recentMealIds = ['52772', '52804', '52959'];
  }

  const meals = await Promise.all(
    recentMealIds.map(async (id) => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      return data.meals[0];
    })
  );

  return { meals };
};

const LatestMeals = () => {
  const { meals } = useLoaderData();

  return (
    <div className="container">
      <h1>Latest Meals</h1>
      <p>Meals you've recently viewed:</p>
      <div className="meals-list">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <p>{meal.strCategory} - {meal.strArea}</p>
            <Link to={`/meals-detail?id=${meal.idMeal}`}>View Details</Link>
          </div>
        ))}
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default LatestMeals;