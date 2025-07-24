import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/auth", "routes/auth.tsx"),
  route("/upload", "routes/upload.tsx"),
  route("/resume/:id", "routes/resume.tsx"),
  index("routes/home.tsx"),
] satisfies RouteConfig;
