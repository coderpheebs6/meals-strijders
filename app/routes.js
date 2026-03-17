import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route("categories", "routes/categories.jsx"),
  route("meals-details", "routes/meals-detail.jsx"),
];