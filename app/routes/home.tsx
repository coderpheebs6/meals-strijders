export const clientLoader = async () => {
  const categories = [
    
  ];

  return { categories };
};

const Home = () => {

  return (
    <div className="container">
      <div className="top-buttons">
        <button>Categories</button>
        <button>Latest Meals</button>
      </div>
      <div className="post">
        <h2>Sample Meal Post</h2>
        <p>This is a placeholder for a meal post. You can add more content here.</p>
      </div>
    </div>
  );
};

export default Home;
