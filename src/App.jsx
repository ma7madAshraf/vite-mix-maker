import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  HomeLayout,
  About,
  Landing,
  SinglePageError,
  ErrorPage,
  Newsletter,
  Cocktail,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleLoader } from "./pages/Cocktail";
import { action as firstAction } from "./pages/Newsletter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: "/cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleLoader(queryClient),
        element: <Cocktail />,
      },
      { path: "/newsletter", action: firstAction, element: <Newsletter /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
