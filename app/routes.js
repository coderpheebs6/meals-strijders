import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route("categories", "routes/categories.jsx"),
  route("latest-meals", "routes/latest-meals.tsx"),
  route("meals-detail", "routes/meals-detail.jsx"),
];