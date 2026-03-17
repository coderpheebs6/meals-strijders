import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route("categories", "routes/categories.jsx"),
  route("meals-detail/:id", "routes/meals-detail.jsx"),
  route("meals-detail", "routes/meals-detail.jsx"),
];