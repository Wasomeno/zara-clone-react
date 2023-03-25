import React from "react";
import ReactDOM from "react-dom/client";
import {
  RootRoute,
  Route,
  ReactRouter,
  RouterProvider,
} from "@tanstack/react-router";
import App from "./App";
import "./global.css";
import { HomePage } from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import SearchPage from "./views/SearchPage";
import { CategoryPage } from "./views/CategoryPage";
import ProductPage from "./views/ProductPage";
import CategoryContainer from "./views/CategoryContainer";

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const searchRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
});

const categoryIndexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "$categorySlug",
  component: CategoryContainer,
});

const categoryRoute = new Route({
  getParentRoute: () => categoryIndexRoute,
  path: "/",
  component: CategoryPage,
});

const productRoute = new Route({
  getParentRoute: () => categoryIndexRoute,
  path: "/$productId",
  component: ProductPage,
});

const routerTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  searchRoute,
  categoryIndexRoute.addChildren([categoryRoute, productRoute]),
]);

const router = new ReactRouter({ routeTree: routerTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
