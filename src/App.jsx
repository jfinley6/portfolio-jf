import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/skills",
    element: <MySkillsPage />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <ThemeProvider theme={lightTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
