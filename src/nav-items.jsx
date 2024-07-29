import { Home, Newspaper, Globe } from "lucide-react";
import LandingPage from "./pages/LandingPage.jsx";
import AppPage from "./pages/Index.jsx";
import PlanetsPage from "./pages/PlanetsPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <LandingPage />,
  },
  {
    title: "App",
    to: "/app",
    icon: <Newspaper className="h-4 w-4" />,
    page: <AppPage />,
  },
  {
    title: "Planets",
    to: "/planets",
    icon: <Globe className="h-4 w-4" />,
    page: <PlanetsPage />,
  },
];
