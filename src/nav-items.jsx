import { Home, Newspaper } from "lucide-react";
import LandingPage from "./pages/LandingPage.jsx";
import AppPage from "./pages/Index.jsx";

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
];
