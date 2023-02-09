import { useState } from "react";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  function toggleShowMenu() {
    setShowMenu((current) => !current);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar toggleMenu={() => toggleShowMenu()} />
      <Menu
        showMenu={showMenu}
        toggleMenu={() => toggleShowMenu()}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
