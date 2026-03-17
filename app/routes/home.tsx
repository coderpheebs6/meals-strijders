import { Link } from "react-router";

export const clientLoader = async () => {
  const categories = [
    
  ];

  return { categories };
};

const Home = () => {

  return (
    <div className="container">
      <nav className="top-buttons">
        <Link to="/categories">Categories</Link>
        <Link to="/meals-detail">Latest Meals</Link>
      </nav>
      <div className="post">
        <h2>Sample Meal Post</h2>
        <p>This is a placeholder for a meal post. You can add more content here.</p>
      </div>
    </div>
  );
};

export default Home;
